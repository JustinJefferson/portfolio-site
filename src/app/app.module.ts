import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioDirectoryComponent } from './portfolio-directory/portfolio-directory.component';
import { PortfolioTabComponent } from './portfolio-tab/portfolio-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioDirectoryComponent,
    PortfolioTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
