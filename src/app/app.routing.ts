import {RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AppModule} from './app.module';

export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot([
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'nearby'
  },
  {
    path: 'nearby',
    loadChildren: './nearby/nearby.module#NearbyModule'
  }
]);
