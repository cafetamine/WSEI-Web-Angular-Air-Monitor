import {Observable} from 'rxjs';
import {Measurement} from '../../domain/measurement/Measurement';

export interface MeasurementClient {

  /**
   * Returns observable measurement for given installation id.
   *
   * @param installationId id of installation for which measurement should be fetched.
   *
   * @return measurement observable measurements
   */
  fetchMeasurementByInstallationId(installationId: number): Observable<Measurement>;

}
