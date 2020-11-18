import { Pipe, PipeTransform } from '@angular/core';
import { ContactModel } from '../model/contact.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform( contacts: any, arg: any ): any {
    
    console.log( contacts );    

    for ( let contact of contacts ) {
      if ( contact.nombre.indexOf() > -1 ) {
        contact.push( contact );
      }
    }

    return;
  }

}
