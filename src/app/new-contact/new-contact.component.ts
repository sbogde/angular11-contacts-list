import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})

export class NewContactComponent implements OnInit {
  @Output() contactEvent = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit(): void {
  }

  createContact($event) {
    $event.preventDefault();
    this.contactEvent.emit( {id: 6, name:"John DoeX", phone:"123-456-7899", email: "testX@test.com"})
  }
}
