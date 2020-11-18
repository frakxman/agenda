import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components 
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'contacts' }
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
