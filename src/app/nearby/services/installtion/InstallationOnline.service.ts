import {Injectable} from '@angular/core';
import {AirlyClientService} from '../../../client/airly/AirlyClient.service';
import {InstallationFacade} from '../../../core/application/installation/InstallationFacade';
import {GetInstallationsByLocationCommand} from '../../../core/application/installation/command/GetInstallationsByLocationCommand';
import {Observable, of} from 'rxjs';
import {CoordinatesService} from '../coordinates/Coordinates.service';
import {flatMap, map} from 'rxjs/internal/operators';
import {GetInstallationsResult} from '../../../core/application/installation/result/GetInstallationsResult';
import {InstallationError} from '../../../core/application/installation/InstallationError';
import {GetInstallationsNearbyCommand} from '../../../core/application/installation/command/GetInstallationsNearbyCommand';

@Injectable({providedIn: 'root'})
export class InstallationOnlineService implements InstallationFacade {

  // TODO inject by interface
  public constructor(private readonly _coordinatesService: CoordinatesService,
                     private readonly _client: AirlyClientService) { }

   public getNearbyInstallations(command: GetInstallationsNearbyCommand): Observable<GetInstallationsResult> {
     if (!command.isValid()) {
       return of(GetInstallationsResult.FailureInternal(InstallationError.InvalidCommandInput));
     }
     return this._coordinatesService.getCurrentCoordinates()
                .pipe(flatMap(coordinatesReadResult => {
                  if (coordinatesReadResult.isSuccess()) {
                    const coordinates = coordinatesReadResult.getCoordinates();
                    return this.getInstallationsByLocation(command.withCoordinates(coordinates));
                  } else {
                    // TODO use coordinates error instead
                   return of(GetInstallationsResult.FailureInternal(InstallationError.GeolocationRead));
                  }
                }));
   }

  public getInstallationsByLocation(command: GetInstallationsByLocationCommand): Observable<GetInstallationsResult> {
    if (!command.isValid()) {
      return of(GetInstallationsResult.FailureInternal(InstallationError.InvalidCommandInput));
    }
    // TODO failures
    return this._client.fetchNearestInstallations(command.latitude, command.longitude, command.radius, command.limit)
               .pipe(map(httpResult => {
                   return GetInstallationsResult.Success(httpResult);
                 })
                 // TODO handle api errors - there or in client?
                 // TODO check for null or empty responses - mby redirects?
                 // TODO DTO
               );
  }

}
