import {NearbyModule} from './nearby.module';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InstallationsComponent} from './installations/installations.component';

export const routing: ModuleWithProviders<NearbyModule> = RouterModule.forChild([
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'nearby/installations'
  },
  {
    path: 'nearby/installations',
    component: InstallationsComponent
  },
]);
