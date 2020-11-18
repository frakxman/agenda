import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ContactModel } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private url = 'https://agenda-14abb.firebaseio.com';

  constructor( private http: HttpClient ) { }

  createContact( contact: ContactModel ) {
    return this.http.post(`${ this.url }/contacts.json`, contact )
      .pipe(
        map( ( resp: any ) => {
          contact.id = resp.name;
          return contact;
        })
      );
  }

  updateContact( contact: ContactModel ) {
    const contactTemp = {
      ...contact
    };

    delete contactTemp.id;

    return this.http.put(`${ this.url }/contacts/${ contact.id }.json`, contactTemp );
  }

  getContact( id: string ) {
    return this.http.get(`${ this.url }/contacts/${ id }.json`);
  }

  getContacts() {
    return this.http.get(`${ this.url }/contacts.json`)
      .pipe(
        map( this.createArray )
      );
  }

  deleteContact( id: string ) {
    return this.http.delete(`${ this.url }/contacts/${ id }.json`);
  }

  private createArray( contactsObj: object ) {
    const contacts: ContactModel[] = [];
    
    if ( contactsObj === null) {
      return [];
    }

    Object.keys( contactsObj ).forEach( key => {
      const contact: ContactModel = contactsObj[key];  
      contact.id = key;
      contacts.push( contact );
    });
    return contacts;
  }
}
