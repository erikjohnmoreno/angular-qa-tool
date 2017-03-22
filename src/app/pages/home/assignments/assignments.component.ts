import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "assignments",
    templateUrl: "assignments.html"
})

export class AssignmentsComponent implements OnInit {
    @Input('weekUsers') public week_users;
    @Input('dates') public dates;
    @Input('projects') public projects;

    @Output() assign = new EventEmitter();

    ngOnInit() {
        
    }

    handleAssign(projects, user_id: number, date: string) {
        this.assign.emit({projects: projects, user_id: user_id, date: date});
    }
    
}