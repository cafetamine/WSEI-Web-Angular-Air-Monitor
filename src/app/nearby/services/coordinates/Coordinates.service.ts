import {Injectable} from '@angular/core';
import {CoordinatesFacade} from '../../../core/application/coordinates/CoordinatesFacade';
import {Observable} from 'rxjs';
import {GetCurrentCoordinatesResult} from '../../../core/application/coordinates/result/GetCurrentCoordinatesResult';
import {CoordinatesError} from '../../../core/application/coordinates/CoordinatesError';

@Injectable({providedIn: 'root'})
export class CoordinatesService implements CoordinatesFacade {

  public constructor() { }

  public getCurrentCoordinates(): Observable<GetCurrentCoordinatesResult> {
    return new Observable(subscriber => {
      if (this.isGeolocationAvailable()) {
        window.navigator.geolocation.getCurrentPosition(
          position => subscriber.next(GetCurrentCoordinatesResult.Success(position)),
          error => subscriber.next(GetCurrentCoordinatesResult.Failure(error)));
      } else {
        subscriber.next(GetCurrentCoordinatesResult.FailureInternal(CoordinatesError.GeolocationUnavailable));
      }
    });
  }

  private isGeolocationAvailable(): boolean {
    return !! window && !!window.navigator && !!window.navigator.geolocation;
  }

}
