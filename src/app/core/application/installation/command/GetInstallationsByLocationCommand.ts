import {Coordinates} from '../../../domain/coordinates/Coordinates';
import {GetInstallationsCommandBase} from './GetInstallationsCommandBase';

export class GetInstallationsByLocationCommand extends GetInstallationsCommandBase {

  public constructor(public readonly coordinates: Coordinates,
                     optionalRadius?: number,
                     optionalLimit?: number) {
    super(optionalRadius, optionalLimit);
  }

  public get latitude(): number {
    return this.coordinates.latitude;
  }

  public get longitude(): number {
    return this.coordinates.longitude;
  }

  // TODO validate command - redirect, error mapping
  // TODO result, error mapping? move to getters?
  public isValid(): boolean {
    return super.isValid()
        && GetInstallationsCommandBase.LatitudeRegex.test(this.coordinates.latitude.toString())
        && GetInstallationsCommandBase.LongitudeRegex.test(this.coordinates.longitude.toString())

  }

  public static Create(coordinates: Coordinates,
                       optionalRadius?: number,
                       optionalLimit?: number): GetInstallationsByLocationCommand {
    return new GetInstallationsByLocationCommand(coordinates, optionalRadius, optionalLimit);
  }

}
