import { Injectable } from '@angular/core';
import {AirlyClientService} from '../../client/airly/AirlyClient.service';
import {InstallationFacade} from '../../core/application/installation/InstallationFacade';
import {GetInstallationByLocationCommand} from '../../core/application/installation/command/GetInstallationByLocationCommand';
import {Observable} from 'rxjs';
import {Installation} from '../../core/domain/installation/Installation';

@Injectable({providedIn: 'root'})
export class InstallationOnlineService implements InstallationFacade {

  // TODO inject by interface
  public constructor(private readonly _client: AirlyClientService) { }

  public getInstallationsByLocation(command: GetInstallationByLocationCommand): Observable<Installation[]> {
    if (!command.isValid()) {
      // TODO validate command - redirect, error mapping
      console.error(`invalid command: ${command}`);
    }
    return this._client.fetchNearestInstallations(command.latitude, command.longitude, command.radius, command.limit)
               .pipe(
                 // TODO handle api errors - there or in client?
                 // TODO check for null or empty responses - mby redirects?
                 // TODO DTO
               );
  }

}
