import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-page-region',
  templateUrl: './page-region.component.html',

})
export class PageRegionComponent {

  countryArray: any = [];
  countryFound = true;

  endpointRegion(value: string) {
    this.paisService.getRegion(value)
      .subscribe(countries => {
        this.countryFound = true;
        this.countryArray = countries;

      }, () => {
        this.countryFound = false;
      })
  }


  sugerencias(event: string) {
    if (event.length > 0) {
      this.endpointRegion(event)
    } else {
      this.countryArray = [];
    }

  }

  constructor(private paisService: PaisesService) { }



}
