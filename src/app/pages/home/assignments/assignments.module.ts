import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssignmentsComponent } from './assignments.component';
import { routing } from './home.routing';

import { TagInputModule } from 'ng2-tag-input';

@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        FormsModule,
        TagInputModule,
        routing
    ],
    declarations: [
        AssignmentsComponent
    ]
})

export class AssignmentsModule {}