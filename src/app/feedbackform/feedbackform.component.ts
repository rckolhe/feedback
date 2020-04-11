import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackserviceService } from '../feedbackservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {
  public head="Feedback Form";

  public name="";
  public finaldata={};
  constructor(private http:HttpClient,public router:Router,private feedservice:FeedbackserviceService) { }
  public result;
  ngOnInit() {
  }
  
  onSubmit(data){
    //console.log("1:",data);
    this.finaldata=data;
    console.log(this.finaldata);
    this.feedservice.setuserdata(this.finaldata);
    /*this.http.get('http://localhost:4200').subscribe((response:any)=>{
      this.result=response;
      
      this.feedservice.setuserdata(this.finaldata);
    })
    console.log(this.result);*/
    this.router.navigate(['/smileyform',this.finaldata]);
  }
}
