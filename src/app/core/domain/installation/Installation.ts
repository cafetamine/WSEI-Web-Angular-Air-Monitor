import {InstallationLocation} from './InstallationLocation';
import {InstallationAddress} from './InstallationAddress';
import {InstallationSponsor} from './InstallationSponsor';

export class Installation {

  public constructor(public readonly id: number,
                     public readonly elevation: number,
                     public readonly isAirly: boolean,
                     public readonly locationId: number,
                     public readonly location: InstallationLocation,
                     public readonly address: InstallationAddress,
                     public readonly sponsor: InstallationSponsor) { }

  // TODO dto object, put elevation into location
  public getLocationDisplayString(): string {
    return `( ${this.location.latitude}, ${this.location.longitude}, ${this.elevation} )`;
  }

}
