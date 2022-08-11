import { Component, Input, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { CountryResponse } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styles: [`
  tr{
    font-family: var( --font-family )
  }
   
  `]
})
export class TableComponentComponent  {

@Input("arrayCountries") countryArray: CountryResponse [] = [];



  constructor() { }
}
