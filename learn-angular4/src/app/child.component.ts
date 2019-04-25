import { Component} from '@angular/core';

@Component({
  selector: 'app-child',
  template:`
        <h5> {{ value }}</h5>
        `
})

export class ChildComponent {
  value = 0;
}
