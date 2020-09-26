import { Injectable } from '@angular/core';
import {AirlyClientService} from '../../client/airly/AirlyClient.service';
import {MeasurementFacade} from '../../core/application/measurement/MeasurementFacade';
import {GetMeasurementByInstallationIdCommand} from '../../core/application/measurement/command/GetMeasurementByInstallationIdCommand';
import {Observable} from 'rxjs';
import {Measurement} from '../../core/domain/measurement/Measurement';

@Injectable({providedIn: 'root'})
export class MeasurementOnlineService implements MeasurementFacade {

  // TODO inject by interface
  public constructor(private readonly _client: AirlyClientService) { }

  public getMeasurementByInstallationId(command: GetMeasurementByInstallationIdCommand): Observable<Measurement> {
    if (!command.isValid()) {
      // TODO validate command - redirect, error mapping
      console.error(`invalid command: ${command}`);
    }
    return this._client.fetchMeasurementByInstallationId(command.installationId)
               .pipe(
                 // TODO handle api errors - there or in client?
                 // TODO check for null or empty responses - mby redirects?
                 // TODO DTO
               );
  }

}
