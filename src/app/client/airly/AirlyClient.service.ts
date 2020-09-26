import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InstallationClient} from '../../core/application/installation/InstallationClient';
import {AirlyClientConfig} from './AirlyClientConfig';
import {Observable} from 'rxjs';
import {Installation} from '../../core/domain/installation/Installation';
import {AirlyClientOptions} from './AirlyClientOptions';

@Injectable({providedIn: 'root'})
export class AirlyClientService implements InstallationClient {

  private readonly _config: AirlyClientConfig;

  public constructor(private readonly _http: HttpClient) {
    this._config = AirlyClientConfig.CreateFromEnvironment();
  }

  // TODO refactor on options redo
  // TODO handle api errors
  //      - 401 Unauthorized
  public getNearestInstallations(latitude: number, longitude: number, distance: number, limit: number): Observable<Installation[]> {
    return this._http.get<Installation[]>(
      `${this._config.apiUrl}${AirlyClientOptions.GetNearestInstallationsUrl(latitude, longitude, distance, limit)}`, {
        headers: this._config.authHeaders
      });
  }

}
