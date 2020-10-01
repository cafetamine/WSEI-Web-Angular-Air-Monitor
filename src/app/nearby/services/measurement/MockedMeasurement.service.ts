import {Injectable} from '@angular/core';
import {MeasurementFacade} from '../../../core/application/measurement/MeasurementFacade';
import {GetMeasurementByInstallationIdCommand} from '../../../core/application/measurement/command/GetMeasurementByInstallationIdCommand';
import {Observable} from 'rxjs';
import {GetMeasurementByInstallationIdResult} from '../../../core/application/measurement/result/GetMeasurementByInstallationIdResult';

@Injectable({providedIn: 'root'})
export class MockedMeasurementService implements MeasurementFacade {

  public getMeasurementByInstallationId(command: GetMeasurementByInstallationIdCommand): Observable<GetMeasurementByInstallationIdResult> {
    return undefined;
  }

}
