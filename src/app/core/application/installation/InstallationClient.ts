import {Observable} from 'rxjs';
import {Installation} from '../../domain/installation/Installation';

export interface InstallationClient {

  /**
   * Returns list of installations near specified coordinates and fulfilling given query params.
   *
   * @param latitude  - of searched area
   * @param longitude - of searched area
   * @param distance  - radius of searched area around coordinates in KM
   * @param limit     - maximum installations returned
   *
   * @return installations - observable list of installations
   */
  getNearestInstallations(latitude: number, longitude: number, distance: number, limit: number): Observable<Installation[]>;

}
