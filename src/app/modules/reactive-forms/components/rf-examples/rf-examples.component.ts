import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserData } from '../../interfaces/rfInterfaces';
import { passwordMatchValidator } from '../../helpers/pasvordMatchValidator';
import { SpesialErrorStateMatcher } from '../../helpers/errorStateMatcher';

@Component({
  selector: 'app-rf-examples',
  templateUrl: './rf-examples.component.html',
  styleUrls: ['./rf-examples.component.css']
})
export class RfExamplesComponent implements OnInit {
  public loginForm: FormGroup;
  public resetPasswordForm: FormGroup;
  public matcher = new SpesialErrorStateMatcher();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required], []),
      password: new FormControl('', [Validators.required])
    });

    this.resetPasswordForm = this.formBuilder.group({
      pasword: ['', [Validators.required]],
      passwordCheck: ['', [Validators.required]]
    }, {
      validator: passwordMatchValidator('pasword', 'passwordCheck')
    });
  }

  onLogin1() {
    console.log(this.loginForm.status, this.loginForm.controls);
    const newUser = new UserData(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }

  onLogin2() {
    console.log(this.resetPasswordForm.status, this.resetPasswordForm.controls);
  }

  get form1() { return this.loginForm.controls; }
  get form2() { return this.resetPasswordForm.controls; }
}
