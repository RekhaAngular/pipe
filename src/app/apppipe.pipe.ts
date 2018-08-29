import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apppipe'
})
export class ApppipePipe implements PipeTransform {

  transform(value: number, multiply: string): number {
    let mul = parseFloat(multiply);
    return value*mul;
  }

}
