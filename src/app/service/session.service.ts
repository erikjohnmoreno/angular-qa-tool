import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { CommonService } from './common.service';

@Injectable()
export class SessionService {

  private sessionUrl = "http://localhost:8000/api/v1/sessions"
  
  constructor(
    private commonService: CommonService,
    private router: Router,
    private http: Http) {}

  authenticate(email: string, password: string) {
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({ headers: headers })
    let params = {
      email: email,
      password: password
    }
    return this.http.post(this.sessionUrl, params, options)
                    .map(this.commonService.extractData)
                    .catch(this.commonService.handleError)
  }
  signout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }

  userSignedIn() {
    return !!localStorage.getItem("access_token")
  }
}