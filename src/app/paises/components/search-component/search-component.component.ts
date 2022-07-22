import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',

})
export class SearchComponentComponent {


  @Output() onEmitValue: EventEmitter<string> = new EventEmitter;

  getValue(event: KeyboardEvent, getValue: HTMLInputElement) {
    if (event.keyCode !== 13) return;
    const valor = getValue.value.trim();
    this.onEmitValue.emit(valor);
    getValue.value = "";
  }



  constructor() { }

}
