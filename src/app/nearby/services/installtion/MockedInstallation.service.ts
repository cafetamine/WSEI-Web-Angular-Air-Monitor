import {Injectable} from '@angular/core';
import {InstallationFacade} from '../../../core/application/installation/InstallationFacade';
import {GetInstallationsByLocationCommand} from '../../../core/application/installation/command/GetInstallationsByLocationCommand';
import {Observable, of} from 'rxjs';
import {GetInstallationsResult} from '../../../core/application/installation/result/GetInstallationsResult';
import {Installation} from '../../../core/domain/installation/Installation';
import {InstallationLocation} from '../../../core/domain/installation/InstallationLocation';
import {InstallationAddress} from '../../../core/domain/installation/InstallationAddress';
import {InstallationSponsor} from '../../../core/domain/installation/InstallationSponsor';
import {GetInstallationsNearbyCommand} from '../../../core/application/installation/command/GetInstallationsNearbyCommand';

@Injectable({providedIn: 'root'})
export class MockedInstallationService implements InstallationFacade {

  public constructor() { }

  public getNearbyInstallations(command: GetInstallationsNearbyCommand): Observable<GetInstallationsResult> {
    return this.getInstallationsByLocation(null);
  }

  public getInstallationsByLocation(command: GetInstallationsByLocationCommand): Observable<GetInstallationsResult> {
    return of(GetInstallationsResult.Success([
      new Installation(
        8077,
        220.38,
        true,
        8077,
        new InstallationLocation(
          50.062006,
          19.940984
        ),
        new InstallationAddress(
          'Poland',
          'Krakow',
          'Mikołajska',
          'streetNumber1',
          'Krakow',
          'Mikołajska'
        ),
        new InstallationSponsor(
          489,
          'Chatham Financial',
          'Airly Sensor\'s sponsor',
          'https://cdn.airly.eu/logo/ChathamFinancial_1570109001008_473803190.jpg',
          'https://crossweb.pl/job/chatham-financial/ ',
          `Chatham Financial`
        )
      ),
      new Installation(
        2,
        22,
        true,
        2,
        new InstallationLocation(
          22.22,
          222.222
        ),
        new InstallationAddress(
          'country2',
          'city2',
          'street2',
          'streetNumber2',
          'displayAddress12',
          'displayAddress22'
        ),
        new InstallationSponsor(
          2,
          'sponsorName2',
          'description2',
          'logo2',
          'link2',
          `displayName2`
        )
      ),
    ]));
  }

}
