import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { NewContactComponent } from './new-contact/new-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
