import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import {SessionService} from '../../service/session.service';
import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login implements OnInit{

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public errors = [];

  constructor(
    private router: Router,
    private sessionService: SessionService,
    fb:FormBuilder) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  ngOnInit() {
    if (this.sessionService.userSignedIn()) {
      this.router.navigate(['']);
    }
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.sessionService.authenticate(values["email"], values["password"])
          .subscribe(
            res => {
              localStorage.setItem("user_id", res.id);
              localStorage.setItem("access_token", res.access_token);
              // this.sessionService.setToken(res)
              if (!!localStorage.getItem("access_token")) {
                this.router.navigate(['pages/home']);
              }
            },
            error => {
              this.errors.push(error);
            }
          )
    }
  }
}
