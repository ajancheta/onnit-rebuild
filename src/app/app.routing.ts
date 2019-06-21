import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplementsComponent } from './supplements/supplements.component';

const appRoutes: Routes = [
  {
    path: 'supplements',
    component: SupplementsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);