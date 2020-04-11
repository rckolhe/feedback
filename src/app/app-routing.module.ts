import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { HomeComponent } from './home/home.component';
import { SmileyformComponent } from './smileyform/smileyform.component';
import { ThankyouComponent } from './thankyou/thankyou.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'feedbackform', component:FeedbackformComponent},
  {path:'smileyform', component:SmileyformComponent},
  {path:'thankyou', component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets=[FeedbackformComponent,SmileyformComponent,ThankyouComponent]
