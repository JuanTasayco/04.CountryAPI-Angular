import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountryResponse } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-page-code-id',
  templateUrl: './page-code-id.component.html',

})
export class PageCodeIdComponent implements OnInit {

country!: CountryResponse;
countryFound : boolean = true;





  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap((params)=> this.paisService.getCodeId(params["id"]))
    ).subscribe((infoPais)=>{
      [this.country] = infoPais;
      this.countryFound = true;
    },()=>{
      this.countryFound = false;
      
    })


  }


  constructor(private paisService : PaisesService,
      private activatedRoute : ActivatedRoute
    ) { }

}
