import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


import { SessionService } from '../../service/session.service'; 
import { UserService } from '../../service/user.service';
import { ProjectService } from '../../service/project.service';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'home',
    templateUrl: './home.html'
})

export class Home implements OnInit {
    firstyear;
    firstday;
    firstmonth;
    firstdate;
    int_first_date;

    lastyear;
    lastday;
    lastmonth;
    lastdate;
    int_last_date;

    week_users;
    projects;
    dates = []
    errors = []
    is_error: boolean = false;

    constructor(
        private datepipe: DatePipe,
        private userService: UserService,
        private projectService: ProjectService,
        private sessionService: SessionService, 
        private router: Router) {}

    ngOnInit() {
        this.projectService.getProjects()
                           .subscribe(res => {
                            this.projects = res
                           })

        this.userService.getAssignments().subscribe(res => {
            this.week_users = res;
        })

        var date = new Date();
        this.firstdate = this.getBeginningOfWeek(date);
        this.lastdate = new Date(date.setDate(this.getBeginningOfWeek(date).getDate() + 6));
        
        var now = new Date();
        for (var d = new Date(this.firstdate); d <= this.lastdate; d.setDate(d.getDate() + 1)) {
            this.dates.push(new Date(d));
        }
    }

    // Assign projects to QA
    assign(projects, user_id: number, date: string) {
        for (var i = 0; i < projects.length; i++) {
            var project_id = projects[i].id
            var date_params = this.datepipe.transform(date, 'yyyy-MM-dd');
            this.projectService
                .projectAssign(project_id, user_id, date_params)
                .subscribe(res => {
                    var date_params = this.datepipe.transform(this.firstdate, 'yyyy-MM-dd')
                    this.userService.getAssignments(date_params).subscribe(res => {
                        this.week_users = res;
                    })
                },
                error => {
                    this.errors.push(error);
                    this.is_error = true;
                    setTimeout(function() {
                        this.is_error = false;
                        this.errors = []
                    }.bind(this), 3000);
                })
        }
        
    }

    // Methods to Navigate by week 

    previousWeek() {
        var nfd = new Date(this.firstdate);
        var nld = new Date(this.lastdate);
        this.firstdate = nfd.setDate(nfd.getDate() - 7);
        this.lastdate = nld.setDate(nld.getDate() - 7);
        this.assignDate(this.firstdate, this.lastdate);
        var date_params = this.datepipe.transform(this.firstdate, 'yyyy-MM-dd')
        this.userService.getAssignments(date_params)
                        .subscribe(res=> {
                            this.week_users = res;

                        })
    }

    nextWeek() {
        var nfd = new Date(this.firstdate);
        var nld = new Date(this.lastdate);
        this.firstdate = nfd.setDate(nfd.getDate() + 7);
        this.lastdate = nld.setDate(nld.getDate() + 7);
        this.assignDate(this.firstdate, this.lastdate);
        var date_params = this.datepipe.transform(this.firstdate, 'yyyy-MM-dd');
        this.userService.getAssignments(date_params)
                        .subscribe(res=> {
                            this.week_users = res;
                        })
    }

    getBeginningOfWeek(d) {
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday

        return new Date(d.setDate(diff));
    }

    assignDate(first, last) {
        this.dates = [];
        for (var d = new Date(first); d <= last; d.setDate(d.getDate() + 1)) {
            this.dates.push(new Date(d));
        }
    }
}