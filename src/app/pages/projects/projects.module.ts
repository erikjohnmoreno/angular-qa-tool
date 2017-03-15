import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgaModule } from '../../theme/nga.module';

import { Projects } from './projects.component';
import { routing } from './projects.routing';

@NgModule({
    imports: [
        CommonModule,
        NgaModule,
        routing
    ]
})