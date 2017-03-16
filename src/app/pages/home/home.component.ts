import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../service/session.service'; 

@Component({
    selector: 'home',
    templateUrl: './home.html'
})

export class Home implements OnInit {
    constructor(private sessionService: SessionService, private router: Router) {}

    ngOnInit() {
        
    }
}