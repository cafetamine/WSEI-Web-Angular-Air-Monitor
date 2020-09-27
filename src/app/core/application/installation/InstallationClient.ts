import {Observable} from 'rxjs';
import {Installation} from '../../domain/installation/Installation';

export interface InstallationClient {

  /**
   * Returns list of nearby-installations near specified coordinates and fulfilling given query params.
   *
   * @param latitude  - of searched area
   * @param longitude - of searched area
   * @param radius  - radius of searched area around coordinates in KM
   * @param limit     - maximum nearby-installations returned
   *
   * @return installations - observable list of nearby-installations
   */
  fetchNearestInstallations(latitude: number, longitude: number, radius: number, limit: number): Observable<Installation[]>;

}
