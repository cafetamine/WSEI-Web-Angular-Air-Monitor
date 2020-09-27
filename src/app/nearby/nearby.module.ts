import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NearbyInstallationsComponent} from './components/nearby-installations/nearby-installations.component';
import {routing} from './nearby.routing';
import { InstallationComponent } from './components/nearby-installations/installation/installation.component';
import { AddressComponent } from './components/nearby-installations/installation/address/address.component';
import { SponsorComponent } from './components/nearby-installations/installation/sponsor/sponsor.component';

@NgModule({
  declarations: [
    NearbyInstallationsComponent,
    InstallationComponent,
    AddressComponent,
    SponsorComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class NearbyModule { }
