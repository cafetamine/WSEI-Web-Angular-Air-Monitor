import {Observable} from 'rxjs';
import {GetMeasurementByInstallationIdCommand} from './command/GetMeasurementByInstallationIdCommand';
import {GetMeasurementByInstallationIdResult} from './result/GetMeasurementByInstallationIdResult';

export interface MeasurementFacade {

  /**
   * Returns measurement for given installation id.
   *
   * @param command query search params.
   *
   * @return measurement for given installation
   */
  getMeasurementByInstallationId(command: GetMeasurementByInstallationIdCommand): Observable<GetMeasurementByInstallationIdResult>;

}
