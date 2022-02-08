import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  @Input() showEmail: boolean;

  contacts = this.contactsSrv.entriesArray;

  constructor(public contactsSrv: ContactsService) { 
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.showEmail, typeof this.showEmail, Boolean(this.showEmail))
  }

  showHideEmail() {
    this.showEmail = !this.showEmail;
  }
}
