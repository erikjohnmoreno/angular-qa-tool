import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  private sessionUrl = "http://localhost:8000/api/v1/sessions"

  constructor(
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
                    .map(this.extractData)
                    .catch(this.handleError)
  }

  userSignedIn() {
    !!localStorage.getItem("access_token")
  }

  signout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }

  extractData(response: Response) {
    let body = response.json();
    return body || { };
  }

  handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}