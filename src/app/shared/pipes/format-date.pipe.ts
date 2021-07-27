import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: Date): unknown {
    return new Date(value).toLocaleDateString('pt-br');
  }

}
