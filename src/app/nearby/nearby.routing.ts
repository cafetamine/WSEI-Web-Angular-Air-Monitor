import {NearbyModule} from './nearby.module';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NearbyInstallationsComponent} from './components/nearby-installations/nearby-installations.component';

export const routing: ModuleWithProviders<NearbyModule> = RouterModule.forChild([
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'nearby/nearby-installations'
  },
  {
    path: 'nearby/nearby-installations',
    component: NearbyInstallationsComponent
  },
]);
