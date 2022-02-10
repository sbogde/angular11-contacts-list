import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})

export class NewContactComponent implements OnInit {
  @Output() contactEvent = new EventEmitter<Contact>();
  newContact: Contact;

  constructor() { }

  ngOnInit(): void {
    this.resetForm()
  }

  createContact() {
    const {name, phone, email} = this.newContact;
    this.contactEvent.emit( {id:-1, name, phone, email});
    this.resetForm();
  }

  resetForm(){
    this.newContact = {id:0, name:'', phone:'', email:''}
  }
}
