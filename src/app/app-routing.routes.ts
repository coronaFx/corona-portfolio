import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
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
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingRoutes {
}
