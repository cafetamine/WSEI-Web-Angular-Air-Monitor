import {CoordinatesError, CoordinatesErrorAdapter} from '../CoordinatesError';
import {Coordinates} from '../../../domain/coordinates/Coordinates';

export class GetCurrentCoordinatesResult {

  private constructor(private readonly _coordinates?: Coordinates,
                      private readonly _error?: CoordinatesError) { }

  public getCoordinates(): Coordinates {
    return this._coordinates;
  }

  public getError(): CoordinatesError {
    return this._error;
  }

  public isSuccess(): boolean {
    return !!this._coordinates;
  }

  public static Success(position: Position): GetCurrentCoordinatesResult {
    return new GetCurrentCoordinatesResult(Coordinates.FromPosition(position), null);
  }

  public static Failure(error: PositionError): GetCurrentCoordinatesResult {
    return new GetCurrentCoordinatesResult(null, CoordinatesErrorAdapter.FromPositionError(error));
  }

  public static FailureInternal(error: CoordinatesError): GetCurrentCoordinatesResult {
    return new GetCurrentCoordinatesResult(null, error);
  }

}
