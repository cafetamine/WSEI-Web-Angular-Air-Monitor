import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {NearbyModule} from './nearby/nearby.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    NearbyModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
