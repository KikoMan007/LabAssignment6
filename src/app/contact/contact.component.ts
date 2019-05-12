import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Array<Contact> = [];


  constructor() { }

  ngOnInit() {
    this.contacts = [
      {
        id: 1,
        firstName: 'Michael',
        lastName: 'Asavamedhi',
        email: 'asavamedhi@mail.fresnostate.edu',
        phone: '(559) 591-1234'
      },
      {
        id: 2,
        firstName: 'Lucas',
        lastName: 'Phan',
        email: 'lphan@mail.fresnostate.edu',
        phone: '(559) 591-4567'
      },
      {
        id: 3,
        firstName: 'Kobe',
        lastName: 'Bryant',
        email: 'Kbryant@mail.fresnostate.edu',
        phone: '(559) 591-7891'
      }
    ];
  }

  addContact() {
    this.contact.unshift(new Contact({}));

  }




}


