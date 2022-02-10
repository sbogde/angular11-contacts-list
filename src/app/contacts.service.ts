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
    return this.http.post('/api/contacts', contact);
  }

}
