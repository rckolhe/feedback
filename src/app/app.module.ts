import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponets } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { SmileyformComponent } from './smileyform/smileyform.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { FeedbackserviceService } from './feedbackservice.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackformComponent,
    routingComponets,
    SmileyformComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FeedbackserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
