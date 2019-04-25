import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contacts-detail',
  template: '<p>Name: {{ name }}</p><p> phoneNumber: {{ phoneNumber }}</p>',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  name = '';
  phoneNumber = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      const id = params.get('id');
      this.name = params.get('name');
      this.phoneNumber = params.get('phoneNumber');
    })
  }
}
