export enum CoordinatesError {
  GeolocationUnavailable = 'Geolocation is unavailable.',
  GeolocationPermissionDenied = 'Geolocation permission was denied.',
  GeolocationPositionUnavailable = 'Geolocation position could not be read.',
  GeolocationReadTimeout = 'Geolocation position could not be read',

  Unknown = 'Ups... Unexpected error occurred while reading location.'
}

export class CoordinatesErrorAdapter {
  public static FromPositionError(error: PositionError): CoordinatesError {
    switch (error.code) {
      case 1:
        return CoordinatesError.GeolocationPermissionDenied;
      case 2:
        return CoordinatesError.GeolocationPositionUnavailable;
      case 3:
        return CoordinatesError.GeolocationReadTimeout;
      default:
        return CoordinatesError.Unknown;
    }
  }
}
