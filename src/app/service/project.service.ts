import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { HttpService } from './http.service';
import { CommonService } from './common.service';

@Injectable()
export class ProjectService {
    private projectUrl = "http://localhost:8000/api/v1/projects";

    constructor(
        private commonService: CommonService,
        private httpService: HttpService,
        private router: Router,
        private http: Http) {}
    
    getProjects() {
        let headers = new Headers();
        this.httpService.createAuthorizationHeader(headers);
        return this.http.get(this.projectUrl, { headers: headers })
                        .map(this.commonService.extractData)
                        .catch(this.commonService.handleError)
        // let headers = new Headers({'Content-Type': 'application/json', 'Authorization': })
    }

     
}