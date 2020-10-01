export class GetMeasurementByInstallationIdCommand {

  private constructor(public readonly installationId: number) { }

  public isValid(): boolean {
    return this.installationId !== null && this.installationId !== undefined;
  }

  public static Create(installationId: number): GetMeasurementByInstallationIdCommand {
    return new GetMeasurementByInstallationIdCommand(installationId);
  }

}
