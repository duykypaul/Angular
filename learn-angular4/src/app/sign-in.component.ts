import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
          <form (ngSubmit)="onsubmit(formSignIn);" #formSignIn = "ngForm">
                <input
                    placeholder="Email"
                    ngModel
                    #txtEmail = "ngModel"
                    name="email"
                    required
                    email
                >
                <input
                    type="password"
                    placeholder="Password"
                    ngModel
                    #txtPassword = "ngModel"
                    name="password"
                    minlength="6"
                    pattern="[a-z]*"
                >

                <p *ngIf="txtEmail.touched && txtEmail.errors?.required" style="font-size: 10px">
                  Email is required
                </p>
                <p *ngIf="txtEmail.touched && txtEmail.errors?.email" style="font-size: 10px">
                  Email is not valid
                </p>

                <div ngModelGroup="Subjects">
                  <label><input type="checkbox" [ngModel]="false" name="Node.js">Node.js</label>
                  <label><input type="checkbox" [ngModel]="false" name="Angular">Angular</label>
                  <label><input type="checkbox" [ngModel]="false" name="React.js">React.js</label>
                </div>
              	<br><br>
                <button [disabled] = "formSignIn.invalid">Submit</button>
                <p> {{ txtEmail.errors | json }}</p>
                <p> {{ txtPassword.errors | json }}</p>
                <p> {{ formSignIn.value | json }}</p>
          </form>
    `
})

export class SignInComponent {

  onsubmit(formSignIn) {
    console.log(formSignIn.value);
  }
}
