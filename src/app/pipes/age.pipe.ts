import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform( age: number ): number {

    if( age ){
      const convertAge = new Date( age );
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      const showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      return showAge;
    };
  }
}
