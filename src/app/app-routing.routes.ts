import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ModuleWithProviders } from '@angular/core';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'portfolio/:id',
    component: PortfolioComponent
  },
  {
    path: 'portfolio',
    redirectTo: 'portfolio/all',
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
