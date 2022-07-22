import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-page-region',
  templateUrl: './page-region.component.html',
 
})
export class PageRegionComponent  {

  countryArray : any   = [];  
  countryFound = true;

  endpointRegion(value: string) {
    this.paisService.getRegion(value)
      .subscribe(countries => {
        this.countryFound = true;
        this.countryArray = countries;
 
      }, ()=>{
        this.countryFound = false;
      })
  }


  constructor(private paisService : PaisesService) { }



}
