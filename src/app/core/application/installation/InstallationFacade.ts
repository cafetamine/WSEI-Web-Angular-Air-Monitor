import {Installation} from '../../domain/installation/Installation';
import {Observable} from 'rxjs';
import {GetInstallationByLocationCommand} from './command/GetInstallationByLocationCommand';

export interface InstallationFacade {

  /**
   * Returns Installations nearby given coordinates.
   *
   * @param command query search params
   *
   * @return list of installations found nearby provided location.
   */
  getInstallationsByLocation(command: GetInstallationByLocationCommand): Observable<Installation[]>;

}
