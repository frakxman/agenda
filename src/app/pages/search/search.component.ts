import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/model/contact.model';
import { ContactsService } from 'src/app/service/contacts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  contacts: ContactModel[] = [];
  filtercontact = '';

  constructor( private contactsService: ContactsService ) { }

  ngOnInit(): void {

    this.contactsService.getContacts()
      .subscribe( resp => {
        this.contacts = resp;
      });
  }

}
