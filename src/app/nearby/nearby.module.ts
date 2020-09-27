import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NearbyInstallationsComponent} from './components/nearby-installations/nearby-installations.component';
import {routing} from './nearby.routing';

@NgModule({
  declarations: [
    NearbyInstallationsComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class NearbyModule { }
