import { Pipe, PipeTransform } from '@angular/core';
/*
 *
*/
@Pipe({name: 'splitName'})
export class SplitNamePipe implements PipeTransform {
  transform(value: string, split = 1): string {
    if(value.toLocaleLowerCase().startsWith('mr.') ||
    value.toLocaleLowerCase().startsWith('ms.') ||
    value.toLocaleLowerCase().startsWith('mrs.') ||
    value.toLocaleLowerCase().startsWith('dr.') ) {
      split += 1;
    }
    return value.split(" ")[split-1];
  }
}
