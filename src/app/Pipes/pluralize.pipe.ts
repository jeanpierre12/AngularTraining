import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let toRet = value + 's';
    // const d = new Date();
    // let minutes = d.getMinutes();
    // if (minutes % 2 == 0){
    //   toRet += 'High'
    // }else {
    //   toRet += 'Low'
    // }
    return toRet;
  }

}
