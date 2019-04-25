import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(1999, 11, 2);
  person = {name: 'Le duy ky', age: 20};
  address = Promise.resolve('137 ly thuong kiet');

  constructor() { }

  ngOnInit() {
  }

}
