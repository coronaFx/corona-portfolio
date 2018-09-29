import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CommonModule } from '@angular/common';
import { AppService } from './app-service.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { PortfolioNavigationComponent } from './portfolio/portfolio-navigation/portfolio-navigation.component';
import { AppRouter } from './app-routing.routes';
import { VideoComponent } from './video/video.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRouter,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    MainComponent,
    PortfolioComponent,
    SpinnerComponent,
    PortfolioNavigationComponent,
    VideoComponent,
  ],
  exports: [
    PortfolioNavigationComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
