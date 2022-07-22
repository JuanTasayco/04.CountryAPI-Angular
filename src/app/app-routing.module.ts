import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageCapitalComponent } from './paises/pages/page-capital/page-capital.component';
import { PageCodeIdComponent } from './paises/pages/page-code-id/page-code-id.component';
import { PageCurrencyComponent } from './paises/pages/page-currency/page-currency.component';
import { PageLenguageComponent } from './paises/pages/page-lenguage/page-lenguage.component';
import { PagePaisComponent } from './paises/pages/page-pais/page-pais.component';
import { PageRegionComponent } from './paises/pages/page-region/page-region.component';

const routes: Routes = [

  {
    path: "",
    component: PagePaisComponent,
    pathMatch: "full"

  },

  {
    path: "region",
    component: PageRegionComponent
  },

  {
    path: "capital",
    component: PageCapitalComponent
  },

  {

    path: "lenguage",
    component: PageLenguageComponent

  },

  {
    path: "currency",
    component: PageCurrencyComponent
  },

  {
    path: "pais/:id",
    component: PageCodeIdComponent
  },

  {
    path: "**",
    redirectTo: "", //se redirecciona al path principal

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
