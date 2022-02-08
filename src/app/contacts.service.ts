import { Injectable } from "@angular/core";
import { Contact } from "./model/contact";

@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  public entriesArray: Contact[] = [
    {id: 1, name:"John Doe1", phone:"123-456-7899", email: "test1@test.com"},
    {id: 2, name:"John Doe2", phone:"123-456-7899", email: "test2@test.com"},
    {id: 3, name:"John Doe3", phone:"123-456-7899", email: "test3@test.com"},
    {id: 4, name:"John Doe4", phone:"123-456-7899", email: "test4@test.com"},
    {id: 5, name:"John Doe5", phone:"123-456-7899", email: "test5@test.com"},
    {id: 6, name:"John Doe6", phone:"123-456-7899", email: "test6@test.com"},
  ]


  constructor() {
  }
  
  addContact(contact: Contact) {
    contact.id = getMaxId(this.entriesArray) + 1;
    this.entriesArray = [...this.entriesArray, { ...contact}];
  }

}

function getMaxId(data) {
  return data.reduce((p, c) => {
    return Math.max(p, c.id);
  },0)
}