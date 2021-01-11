import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

// Module material
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
// Angular Maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCE7-tzAasyxFT2HQ71k_3QVHzCwfTajtc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
