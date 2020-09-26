export class GetMeasurementByInstallationIdCommand {

  private constructor(public readonly installationId: number) { }

  // TODO [airly, api validation] check with api
  public isValid(): boolean {
    return true;
  }

  public static Create(installationId: number): GetMeasurementByInstallationIdCommand {
    return new GetMeasurementByInstallationIdCommand(installationId);
  }

}
