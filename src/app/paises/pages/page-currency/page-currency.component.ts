import { Component} from '@angular/core';
import { CountryResponse } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-page-currency',
  templateUrl: './page-currency.component.html',

})

export class PageCurrencyComponent {

  countryArray: CountryResponse[] = [];
  countryFound = true;


  endpointCurrency(value: string) {

    this.paisService.getCurrency(value)
      .subscribe((countries) => {
        this.countryArray = countries;
        this.countryFound = true;
      }, () => {
        this.countryFound = false;
      })
  }


  sugerencias(event : string ) {
      if(event.length>0){
        this.endpointCurrency(event);
      }else{
        this.countryArray = [];
      }
    }

  constructor(private paisService: PaisesService) { }

}
