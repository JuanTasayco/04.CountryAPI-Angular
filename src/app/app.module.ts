import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PaisesModule } from './paises/paises.module';
import { PaisesService } from './paises/services/paises.service';
import { SharedModule } from './shared/shared.module';

import localEs from "@angular/common/locales/es-PE";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
 
    PaisesModule,
    SharedModule
  ],
  
  providers: [
    PaisesService,
    {provide: LOCALE_ID, useValue: "es-PE"}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
