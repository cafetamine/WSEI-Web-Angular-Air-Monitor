export abstract class GetInstallationsCommandBase {

  protected static DefaultRadius = 3;
  protected static DefaultLimit = 3;

  protected static MinimumRadius = 1;
  protected static MaximumRadius = 3; // TODO check with api

  protected static MinimumLimit = 1;
  protected static MaximumLimit = 3; // TODO check with api

  protected static LatitudeRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
  protected static LongitudeRegex = /^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

  public readonly radius: number;
  public readonly limit: number;

  protected constructor(optionalRadius?: number, optionalLimit?: number) {
    this.radius = optionalRadius ?? GetInstallationsCommandBase.DefaultRadius;
    this.limit = optionalLimit ?? GetInstallationsCommandBase.DefaultLimit;
  }

  // TODO validate command - redirect, error mapping
  // TODO result, error mapping? move to getters?
  public isValid(): boolean {
    return this.radius >= GetInstallationsCommandBase.MinimumRadius
        && this.radius <= GetInstallationsCommandBase.MaximumRadius
        && this.limit >= GetInstallationsCommandBase.MinimumLimit
        && this.limit <= GetInstallationsCommandBase.MaximumLimit;
  }

}
