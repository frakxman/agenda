import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ContactModel } from 'src/app/model/contact.model';

import { ContactsService } from '../../service/contacts.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new ContactModel();

  constructor( private contactsService: ContactsService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if ( id !== 'new' ) {
      this.contactsService.getContact( id )
        .subscribe( ( resp: ContactModel ) => {
          this.contact = resp;
          this.contact.id = id;
        });
    }
  }

  save( form: NgForm ) {

    if ( form.invalid ) {
      Swal.fire({
        title: 'Formulario Imcompleto',
        text: 'Existen espacios sin información',
        icon: 'error',
        showConfirmButton: false,
        showCancelButton: true
      });
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let petition: Observable<any>;
    
    if ( this.contact.id ) {
      petition = this.contactsService.updateContact( this.contact );
    } else {
      petition =  this.contactsService.createContact( this.contact );
    }

    petition.subscribe( resp => {
      Swal.fire({
        title: this.contact.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
    });
  }

  

}
