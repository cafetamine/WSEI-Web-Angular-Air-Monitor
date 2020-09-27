import {Observable} from 'rxjs';
import {GetInstallationsByLocationCommand} from './command/GetInstallationsByLocationCommand';
import {GetInstallationsResult} from './result/GetInstallationsResult';
import {GetInstallationsNearbyCommand} from './command/GetInstallationsNearbyCommand';

export interface InstallationFacade {

  /**
   * Returns Installations nearby given coordinates.
   *
   * @param command query search params
   *
   * @return list of nearby-installations found nearby provided location.
   */
  getInstallationsByLocation(command: GetInstallationsByLocationCommand): Observable<GetInstallationsResult>;

  /**
   * Returns Installations nearby user. Uses internal logic to get users current geolocation.
   *
   * @param command command query search params
   *
   * @return list of nearby-installations found nearby internally read location.
   */
  getNearbyInstallations(command: GetInstallationsNearbyCommand): Observable<GetInstallationsResult>;

}
