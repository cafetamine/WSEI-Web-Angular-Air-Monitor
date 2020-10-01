import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NearbyInstallationsComponent} from './components/nearby-installations/nearby-installations.component';
import {routing} from './nearby.routing';
import { InstallationComponent } from './components/nearby-installations/installation/installation.component';
import { MeasurementComponent } from './components/nearby-installations/measurement/measurement.component';
import { MeasurementValueComponent } from './components/nearby-installations/measurement/measurement-value/measurement-value.component';
import { MeasurementIndexComponent } from './components/nearby-installations/measurement/measurement-index/measurement-index.component';
import { MeasurementStandardComponent } from './components/nearby-installations/measurement/measurement-standard/measurement-standard.component';

@NgModule({
  declarations: [
    NearbyInstallationsComponent,
    InstallationComponent,
    MeasurementComponent,
    MeasurementValueComponent,
    MeasurementIndexComponent,
    MeasurementStandardComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class NearbyModule { }
