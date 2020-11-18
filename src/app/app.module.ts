import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components 
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SearchComponent } from './pages/search/search.component';

// Pipes 
import { AgePipe } from './pipes/age.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactsComponent,
    SearchComponent,
    AgePipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
