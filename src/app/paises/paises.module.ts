import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagePaisComponent } from './pages/page-pais/page-pais.component';
import { PageRegionComponent } from './pages/page-region/page-region.component';
import { PageCapitalComponent } from './pages/page-capital/page-capital.component';
import { PageCurrencyComponent } from './pages/page-currency/page-currency.component';
import { PageLenguageComponent } from './pages/page-lenguage/page-lenguage.component';
import { PageCodeIdComponent } from './pages/page-code-id/page-code-id.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';


import { PaisesService } from './services/paises.service';
import { NgPrimeModule } from '../ng-prime/ng-prime.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObjectsPipe } from './pipes/lenguages.pipe';


@NgModule({
  declarations: [
    PagePaisComponent,
    PageRegionComponent,
    PageCapitalComponent,
    PageCurrencyComponent,
    PageLenguageComponent,
    PageCodeIdComponent,
    TableComponentComponent,
    SearchComponentComponent,
    ObjectsPipe,
    
  ],
  exports: [
    PagePaisComponent,
    PageRegionComponent,
    PageCapitalComponent,
    PageCurrencyComponent,
    PageLenguageComponent,
    PageCodeIdComponent
  ]
  ,
  providers: [
    PaisesService
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgPrimeModule,
    BrowserAnimationsModule
  ]
})
export class PaisesModule { }
