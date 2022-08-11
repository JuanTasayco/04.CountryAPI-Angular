import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-page-pais',
  templateUrl: './page-pais.component.html',
})
export class PagePaisComponent {


  countryArray: any = [];
  countryFound = true;

  endpointCountry(value: string) {
    this.paisService.getCountry(value)
      .subscribe(countries => {
        this.countryFound = true;
        this.countryArray = countries;
      }, () => {
        this.countryFound = false;
      })
  }

  sugerencias(event: string){
    if(event.length>0){
      this.endpointCountry(event)
    }else{
      this.countryArray = [];
    }
  }


  constructor(private paisService: PaisesService) { }


}
