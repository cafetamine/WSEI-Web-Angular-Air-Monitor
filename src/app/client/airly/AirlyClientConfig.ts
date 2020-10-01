import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export class AirlyClientConfig {

  private constructor(public readonly apiUrl: string,
                      public readonly authHeaders: HttpHeaders) { }

  public static Create(isSecure: boolean, hostAddress: string, apiVersion: string, apiKey: string): AirlyClientConfig {
    return new AirlyClientConfig(AirlyClientConfig.PrepareApiUrl(isSecure, hostAddress, apiVersion),
                                 AirlyClientConfig.PrepareAuthHeaders(apiKey));
  }

  public static CreateFromEnvironment(): AirlyClientConfig {
    return AirlyClientConfig.Create(environment.client.airly.isSecure,
                                    environment.client.airly.hostAddress,
                                    environment.client.airly.apiVersion,
                                    environment.client.airly.apiKey);
  }

  private static PrepareApiUrl(isSecure: boolean, hostAddress: string, apiVersion: string): string {
    return `${isSecure ? 'https' : 'http'}://${hostAddress}/${apiVersion}`;
  }

  private static PrepareAuthHeaders(apiKey: string): HttpHeaders {
    return new HttpHeaders({apikey: apiKey});
  }

}
