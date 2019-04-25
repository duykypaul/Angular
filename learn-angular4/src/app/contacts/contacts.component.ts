import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
    { id: 1, name: 'Lê Duy Kỳ', phoneNumber: '0329199381' },
    { id: 2, name: 'Phí Xuân Hoàn', phoneNumber: '0455445466' },
    { id: 3, name: 'Trần Tiến Đức', phoneNumber: '0781354359' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
