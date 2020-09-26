export class AirlyClientOptions {

  // TODO rethink after measurements added
  public static GetNearestInstallationsUrl(latitude: number,
                                           longitude: number,
                                           distance: number,
                                           limit: number): string {
    return `/installations/nearest?lat=${latitude}&lng=${longitude}&maxDistanceKM=${distance}&maxResults=${limit}`;
  }

}
