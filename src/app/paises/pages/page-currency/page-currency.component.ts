import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { CountryResponse } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-page-currency',
  templateUrl: './page-currency.component.html',

})

export class PageCurrencyComponent {

  countryArray : CountryResponse []= [];
  countryFound = true;


  endpointCurrency(value: string ){
    
    this.paisService.getCurrency(value)
    .subscribe((countries)=>{
      this.countryArray = countries;
      this.countryFound = true;
    }, ()=>{
        this.countryFound= false;
    })
  }


  constructor(private paisService : PaisesService) { }

}
