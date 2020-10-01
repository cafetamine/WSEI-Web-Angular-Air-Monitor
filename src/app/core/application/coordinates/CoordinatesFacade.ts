import {Observable} from 'rxjs';
import {GetCurrentCoordinatesResult} from './result/GetCurrentCoordinatesResult';

export interface CoordinatesFacade {

  /**
   * Returns user current coordinates.
   */
  getCurrentCoordinates(): Observable<GetCurrentCoordinatesResult>;

}
