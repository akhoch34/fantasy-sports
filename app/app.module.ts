import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { SportsDataService } from './Services/sports-data.service';

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule,
                  AppRoutingModule],
  declarations: [ AppComponent,
                  DashboardComponent],
  providers: [SportsDataService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
