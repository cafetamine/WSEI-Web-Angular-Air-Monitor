import {Observable} from 'rxjs';
import {Measurement} from '../../domain/measurement/Measurement';
import {GetMeasurementByInstallationIdCommand} from './command/GetMeasurementByInstallationIdCommand';

export interface MeasurementFacade {

  /**
   * Returns measurement for given installation id.
   *
   * @param command query search params.
   *
   * @return measurement for given installation
   */
  getMeasurementByInstallationId(command: GetMeasurementByInstallationIdCommand): Observable<Measurement>;

}
