import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-page-lenguage',
  templateUrl: './page-lenguage.component.html',

})
export class PageLenguageComponent {

  countryArray: CountryResponse[] = [];
  countryFound = true;


  endpointLenguage(value: string) {
    this.paisService.getLenguage(value)
      .subscribe(countries => {
        this.countryFound = true;
        this.countryArray = countries;
      }, () => {
        this.countryFound = false;
      })
  }


  sugerencias(event: string) {
    if (event.length > 0) {
      this.endpointLenguage(event);
    } else {
      this.countryArray = [];
    }
  }


  constructor(private paisService: PaisesService) { }
}
