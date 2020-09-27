import {GetInstallationsCommandBase} from './GetInstallationsCommandBase';
import {Coordinates} from '../../../domain/coordinates/Coordinates';
import {GetInstallationsByLocationCommand} from './GetInstallationsByLocationCommand';

export class GetInstallationsNearbyCommand extends GetInstallationsCommandBase {

  private constructor(optionalRadius: number, optionalLimit: number) {
    super(optionalRadius, optionalLimit);
  }

  public withCoordinates(coordinates: Coordinates): GetInstallationsByLocationCommand {
    return new GetInstallationsByLocationCommand(coordinates, this.radius, this.limit);
  }

  public static Create(optionalRadius?: number, optionalLimit?: number): GetInstallationsNearbyCommand {
    return new GetInstallationsNearbyCommand(optionalRadius, optionalLimit);
  }

}
