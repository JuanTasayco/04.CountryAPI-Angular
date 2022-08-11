import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ProgressSpinnerModule

  ], exports : [
    TableModule,
    ButtonModule,
    ProgressSpinnerModule

  ]
})
export class NgPrimeModule { }
