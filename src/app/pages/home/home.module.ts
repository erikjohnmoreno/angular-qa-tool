import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Home } from './home.component';
import { routing } from './home.routing';

import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { TagInputModule } from 'ng2-tag-input';

@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        FormsModule,
        Ng2AutoCompleteModule,
        TagInputModule,
        routing
    ],
    declarations: [
        Home
    ]
})

export class HomeModule {}