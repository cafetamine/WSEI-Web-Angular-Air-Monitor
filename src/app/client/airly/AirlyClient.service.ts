import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InstallationClient} from '../../core/application/installation/InstallationClient';
import {AirlyClientConfig} from './AirlyClientConfig';
import {Observable} from 'rxjs';
import {Installation} from '../../core/domain/installation/Installation';
import {AirlyClientOptions} from './AirlyClientOptions';
import {MeasurementClient} from '../../core/application/measurement/MeasurementClient';
import {Measurement} from '../../core/domain/measurement/Measurement';

@Injectable({providedIn: 'root'})
export class AirlyClientService implements InstallationClient, MeasurementClient {

  private readonly _config: AirlyClientConfig;

  public constructor(private readonly _http: HttpClient) {
    this._config = AirlyClientConfig.CreateFromEnvironment();
  }

  // TODO [airly, options] refactor on options redo
  // TODO [airly, error handling]  handle api errors
  //      - 401 Unauthorized
  public fetchNearestInstallations(latitude: number, longitude: number, radius: number, limit: number): Observable<Installation[]> {
    return this._http.get<Installation[]>(
      `${this._config.apiUrl}${AirlyClientOptions.GetNearestInstallationsUrl(latitude, longitude, radius, limit)}`, {
        headers: this._config.authHeaders
      });
  }

  // TODO [airly, options] refactor on options redo
  // TODO [airly, error handling]  handle api errors
  //      - 401 Unauthorized
  //      - 301 Installation was replaced by another installation in this location. Please follow redirect.
  //      - 404 No Installation was found by the given id
  public fetchMeasurementByInstallationId(installationId: number): Observable<Measurement> {
    return this._http.get<Measurement>(
      `${this._config.apiUrl}${AirlyClientOptions.GetMeasurementByInstallationId(installationId)}`, {
        headers: this._config.authHeaders
      });
  }

}
