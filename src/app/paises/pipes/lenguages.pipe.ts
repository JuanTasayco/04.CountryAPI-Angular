import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectPipe'
})
export class ObjectsPipe implements PipeTransform {
  //condicional aplica cuando el valor es un [object object] por lo que tenemos que llegar a el 
  transform(objeto: any, condicional: boolean = false): string[] {
    //para pais.lenguajes y moneda
    if (condicional) {
      let valores: string[] = Object.values(objeto);
      for (let o of valores) {
        valores = Object.values(o)
      }
      return valores.sort((a, b) => (a > b) ? -1 : 1);
    } else {
      return Object.values(objeto);
    }
  }

}
