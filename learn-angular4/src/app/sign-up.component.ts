import { TestBed } from '@angular/core/testing';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  template: `
          <form (ngSubmit)= "onsubmit();" [formGroup] = "formSignUp">
                <input placeholder="Email" formControlName="email" >
                <p *ngIf="formSignUp.get('email').invalid && formSignUp.get('email').touched" style="font-size: 10px">
                  Email is required
                </p>
                <br><br>
                <input type="password" placeholder="Password" formControlName="password">
                <br><br>
                <div formGroupName="subjects">
                  <label><input type="checkbox" name="Node.js" formControlName="nodejs">Node.js</label>
                  <label><input type="checkbox" name="Angular" formControlName="angular">Angular</label>
                  <label><input type="checkbox" name="React.js" formControlName="reactjs">React.js</label>
                </div>
                <br><br>
                <button >Submit</button>
          </form>
          <code>{{formSignUp.controls.email.errors | json}}</code>
    `
})

export class SignUpComponent implements OnInit{


  formSignUp : FormGroup;

  constructor(private fb: FormBuilder){

  }


  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      email: ['', [gmailValidators, Validators.email]],
      password: "",

      subjects: this.fb.group({
        nodejs: true,
        angular: false,
        reactjs: false
      })
    });
  }

  onsubmit() {
    console.log(this.formSignUp.value);
  }
}

function gmailValidators(formControl : FormControl){
  if(formControl.value.includes('@gmail.com')){
    return null;
  }
  return {gmail: true};
}
