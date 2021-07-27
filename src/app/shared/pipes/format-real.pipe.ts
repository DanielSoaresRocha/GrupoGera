import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatReal'
})
export class FormatRealPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

}
