import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',

})
export class SearchComponentComponent implements OnInit {
  constructor() { }

  @Output() onEmitValue: EventEmitter<string> = new EventEmitter;

  @Output() onEmitDebounce: EventEmitter<string> = new EventEmitter;

  termino: string = "";

  debouncer: Subject<string> = new Subject //emite cuando dejo de escribir

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onEmitDebounce.emit(valor);
      })
  }


  getValue(event: KeyboardEvent, getValue: HTMLInputElement) {
    if (event.keyCode !== 13) return;
    const valor = getValue.value.trim();
    this.onEmitValue.emit(valor);
    getValue.value = "";
  }

  obtenerValoresEscritos(evento: any) {
    this.termino = evento.target.value;
    this.debouncer.next(this.termino);
  }




}
