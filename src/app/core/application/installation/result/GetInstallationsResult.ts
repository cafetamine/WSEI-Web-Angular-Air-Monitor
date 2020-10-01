import {Installation} from '../../../domain/installation/Installation';
import {InstallationError} from '../InstallationError';

export class GetInstallationsResult {

  private constructor(private readonly _installations?: Installation[],
                      private readonly _error?: InstallationError) { }

  public get installations(): Installation[] {
    return this._installations;
  }

  public get error(): InstallationError {
    return this._error;
  }

  public get isSuccess(): boolean {
    return !!this._installations;
  }

  public static Success(installations: Installation[]): GetInstallationsResult {
    return new GetInstallationsResult(installations, null);
  }

  public static FailureInternal(error: InstallationError): GetInstallationsResult {
    return new GetInstallationsResult(null, error);
  }

}
