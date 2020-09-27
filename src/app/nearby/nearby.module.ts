import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstallationsComponent} from './installations/installations.component';
import {routing} from './nearby.routing';

@NgModule({
  declarations: [
    InstallationsComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class NearbyModule { }
