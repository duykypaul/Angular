import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
	selector: 'app-parent',
	template: `
        <!--<button (click)= "child.value = child.value + 1">add for child</button>-->
        <!--<app-child #child></app-child>-->
        <button (click)= "onAddForChild()">add for child</button>
        <app-child></app-child>
    `

})

export class ParentComponent {
  @ViewChild(ChildComponent) myChild: ChildComponent;

  onAddForChild() {
    this.myChild.value++;
  }
}
