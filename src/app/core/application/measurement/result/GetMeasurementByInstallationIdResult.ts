import {Measurement} from '../../../domain/measurement/Measurement';
import {MeasurementError} from '../MeasurementError';

export class GetMeasurementByInstallationIdResult {

  constructor(private readonly _measurement?: Measurement,
              private readonly _error?: MeasurementError) { }

  public get measurement(): Measurement {
    return this._measurement;
  }

  public get error(): MeasurementError {
    return this._error;
  }

  public get isSuccess(): boolean {
    return !!this._measurement;
  }

  public static Success(measurement: Measurement): GetMeasurementByInstallationIdResult {
    return new GetMeasurementByInstallationIdResult(measurement, null);
  }

  public static FailureInternal(error: MeasurementError): GetMeasurementByInstallationIdResult {
    return new GetMeasurementByInstallationIdResult(null, error);
  }

}
