import { Routes, RouterModule } from '@angular/router';

import { Projects } from './projects.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: Projects
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);