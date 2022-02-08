import { Component } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular11-contacts-list';
  // rows = [...Array(10).keys()];
  contacts = this.contactsSrv.entriesArray

  constructor(public contactsSrv: ContactsService){
  }

  ngOnInit(){
    // console.log(this.contacts);
    // console.log(this.contactsSrv.entriesArray);
  }
}
