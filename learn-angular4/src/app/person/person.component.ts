import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name: String;
  @Input() age: Number;
  @Output() myRemovePerson = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  removeByClick(){
    this.myRemovePerson.emit(this.name);
  }

}
