import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-page-capital',
  templateUrl: './page-capital.component.html',

})
export class PageCapitalComponent {

  countryArray: any = [];
  countryFound = true;

  endpointCapital(value: string ){
    this.paisService.getCapital(value)
    .subscribe(countries => {
      this.countryFound = true;
      this.countryArray = countries;
  
    }, ()=>{
      this.countryFound = false;
    })
  }



  constructor(private paisService : PaisesService) { }

}
