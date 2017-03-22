import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}

    createAuthorizationHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json')
        headers.append('Authorization', localStorage.getItem("access_token"))
        headers.append('UserId', localStorage.getItem("user_id"))
    }
}