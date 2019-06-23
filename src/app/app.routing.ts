import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplementsComponent } from './supplements/supplements.component';
import { SupplementDetailComponent } from './supplement-detail/supplement-detail.component';

const appRoutes: Routes = [
  {
    path: 'supplements',
    component: SupplementsComponent
  },
  {
    path: 'supplements/:id',
    component: SupplementDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);