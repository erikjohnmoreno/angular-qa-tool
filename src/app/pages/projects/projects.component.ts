import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../../service/project.service';

@Component({
    selector: 'projects',
    templateUrl: './projects.html'
})

export class Projects implements OnInit {
    projects;

    constructor(private projectService: ProjectService) {}

    ngOnInit() {
        this.projectService.getProjects()
            .subscribe(res => {
                this.projects = res;
            })
    }
}