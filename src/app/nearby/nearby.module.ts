import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NearbyInstallationsComponent} from './components/nearby-installations/nearby-installations.component';
import {routing} from './nearby.routing';
import { InstallationComponent } from './components/nearby-installations/installation/installation.component';

@NgModule({
  declarations: [
    NearbyInstallationsComponent,
    InstallationComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class NearbyModule { }
