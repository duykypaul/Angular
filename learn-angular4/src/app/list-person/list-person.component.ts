import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  listPerson = [
    { name: "Lê Duy Kỳ", age: 20 },
    { name: "Lê Duy Long", age: 10 },
    { name: "Lê Duy Kỳ", age: 22 },
    { name: "Lê Duy Minh", age: 32 }
  ];
  constructor() { }

  ngOnInit() {
  }
  removePersonByName(name: String) {
    const index = this.listPerson.findIndex(element => element.name === name);
    this.listPerson.splice(index, 1);
  }

}
