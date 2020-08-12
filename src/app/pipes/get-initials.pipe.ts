import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getInitials'
})
export class GetInitialsPipe implements PipeTransform {

  transform(str: any): string {
    if (str) {
      const matches = str.match(/\b(\w)/g); // ['J','S','O','N']
      return matches.join('');
    }
  }
}
