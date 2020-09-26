export class GetInstallationByLocationCommand {

  private static DefaultRadius = 3;
  private static DefaultLimit = 3;

  private static MinimumRadius = 1;
  private static MaximumRadius = 3; // TODO check with api

  private static MinimumLimit = 1;
  private static MaximumLimit = 3; // TODO check with api

  private static LatitudeRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
  private static LongitudeRegex = /^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

  private constructor(public readonly latitude: number,
                      public readonly longitude: number,
                      public readonly radius: number,
                      public readonly limit: number) { }

  // TODO validate command - redirect, error mapping
  // TODO result, error mapping? move to getters?
  public isValid(): boolean {
    return GetInstallationByLocationCommand.LatitudeRegex.test(this.latitude.toString())
        && GetInstallationByLocationCommand.LongitudeRegex.test(this.longitude.toString())
        && this.radius >= GetInstallationByLocationCommand.MinimumRadius
        && this.radius <= GetInstallationByLocationCommand.MaximumRadius
        && this.limit >= GetInstallationByLocationCommand.MinimumLimit
        && this.limit <= GetInstallationByLocationCommand.MaximumLimit;
  }

  public static Create(latitude: number,
                       longitude: number,
                       optionalRadius?: number,
                       optionalLimit?: number): GetInstallationByLocationCommand {
    // TODO where to handle attributes validation
    const radius = optionalRadius ?? GetInstallationByLocationCommand.DefaultRadius;
    const limit = optionalLimit ?? GetInstallationByLocationCommand.DefaultLimit;
    return new GetInstallationByLocationCommand(latitude, longitude, radius, limit);
  }

}
