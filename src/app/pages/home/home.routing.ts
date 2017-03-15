import { Routes, RouterModule } from '@angular/router';

import { Home } from './home.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: Home
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);