import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
export class PipesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    console.log(value);
    console.log(args);

    value = 'Er. ' + value;
    return value;
  }

}
