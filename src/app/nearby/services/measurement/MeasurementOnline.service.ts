import { Injectable } from '@angular/core';
import {AirlyClientService} from '../../../client/airly/AirlyClient.service';
import {MeasurementFacade} from '../../../core/application/measurement/MeasurementFacade';
import {GetMeasurementByInstallationIdCommand} from '../../../core/application/measurement/command/GetMeasurementByInstallationIdCommand';
import {Observable, of} from 'rxjs';
import {GetMeasurementByInstallationIdResult} from '../../../core/application/measurement/result/GetMeasurementByInstallationIdResult';
import {MeasurementError} from '../../../core/application/measurement/MeasurementError';
import {map} from 'rxjs/internal/operators';

@Injectable({providedIn: 'root'})
export class MeasurementOnlineService implements MeasurementFacade {

  // TODO inject by interface
  public constructor(private readonly _client: AirlyClientService) { }

  public getMeasurementByInstallationId(command: GetMeasurementByInstallationIdCommand): Observable<GetMeasurementByInstallationIdResult> {
    return command.isValid()
         ? this._client.fetchMeasurementByInstallationId(command.installationId)
                       .pipe(map(GetMeasurementByInstallationIdResult.Success)
                         // TODO handle api errors - there or in client?
                         // TODO check for null or empty responses - mby redirects?
                         // TODO DTO
                       )
         : of(GetMeasurementByInstallationIdResult.FailureInternal(MeasurementError.InvalidCommandInput));
  }

}
