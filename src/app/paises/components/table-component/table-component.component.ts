import { Component, Input, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { CountryResponse } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styles: []
})
export class TableComponentComponent  {

@Input("arrayCountries") countryArray: CountryResponse [] = [];



  constructor() { }
}
