import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactModel } from 'src/app/model/contact.model';

import { ContactsService } from '../../service/contacts.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: ContactModel[] = [];
  loading = false;

  constructor( private contactsService: ContactsService, private router: Router ) { }

  ngOnInit(): void {

    this.loading = true;
    this.contactsService.getContacts()
      .subscribe( resp => {
        this.contacts = resp;
        this.loading = false;
      });

  }

  deleteContact( contact: ContactModel, i: number ) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `De verdad desea borrar este contacto "${ contact.nombre}"`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then ( resp => {
      if ( resp.value ) {
        this.contacts.splice( i, 1 );
        this.contactsService.deleteContact( contact.id ).subscribe();
      }
    });
  }

  searchContact( text: string ) {
    text = text.trim();

    if ( text.length === 0 ) {
      return;
    }
    console.log( text );    
  }

}
