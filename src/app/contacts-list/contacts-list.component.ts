import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  @Input() showEmail: boolean;
  contacts: Contact[];

  constructor(public contactsSrv: ContactsService) { 
  }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(){
    this.contactsSrv.getEntries().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  showHideEmail() {
    this.showEmail = !this.showEmail;
  }

  createContactParent(contact: Contact) {
    this.contactsSrv.addContact(contact).subscribe(() => this.getContacts());
  }
}
