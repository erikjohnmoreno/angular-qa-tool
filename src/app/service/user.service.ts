import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { HttpService } from './http.service';
import { CommonService } from './common.service';

@Injectable()
export class UserService {
    private userUrl = "http://localhost:8000/api/v1/users";

    constructor(
        private commonService: CommonService,
        private httpService: HttpService,
        private http: Http) {}

    getAssignments(date=null) {
        if (!date) {
            date = ""
        } else {
            date = "?date=" + date
        }
        let headers = new Headers();
        this.httpService.createAuthorizationHeader(headers);
        return this.http.get(this.userUrl + date, { headers: headers}).map(this.commonService.extractData).catch(this.commonService.handleError)
    }

    pollAssignment(date=null) {
        if (!date) {
            date = ""
        } else {
            date = "?date=" + date
        }
        let headers = new Headers();
        this.httpService.createAuthorizationHeader(headers);
        return Observable.interval(1000).flatMap(() => this.http.get(this.userUrl + date, { headers: headers})).map(this.commonService.extractData).catch(this.commonService.handleError)
    
    }

    getAllUsers() {
        let headers = new Headers();
        this.httpService.createAuthorizationHeader(headers);
        return this.http.get(this.userUrl + "/all", { headers: headers}).map(this.commonService.extractData).catch(this.commonService.handleError)
    }
}