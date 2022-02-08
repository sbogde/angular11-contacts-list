import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts = this.contactsSrv.entriesArray;
  showEmail = true;

  constructor(public contactsSrv: ContactsService) { }

  ngOnInit(): void {
  }

  showHideEmail() {
    this.showEmail = !this.showEmail;
  }
}
