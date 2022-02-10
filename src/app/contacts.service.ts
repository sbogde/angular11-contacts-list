import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contact } from "./model/contact";
// import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {



  constructor(private http: HttpClient) {
  }
  
  getEntries(){
    return this.http.get<Contact[]>('/api/contacts')
    // .pipe(
    //   map(contacts => {
    //     return contacts;
    //   })
    // )
  }

  addContact(contact: Contact) {
    // contact.id = getMaxId(this.entriesArray) + 1;
    // this.entriesArray = [...this.entriesArray, { ...contact}];
  }

}

function getMaxId(data) {
  return data.reduce((p, c) => {
    return Math.max(p, c.id);
  },0)
}