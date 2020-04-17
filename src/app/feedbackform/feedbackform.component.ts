import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
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
  constructor(private http:HttpClient,public router:Router,private _service:ApiserviceService) { }

  ngOnInit() {
  }
  
  onSubmit(data){
    this.finaldata=data;
    
    //console.log(this.finaldata);
    this._service.setuserdata(this.finaldata);
    
    this.router.navigate(['/smileyform',this.finaldata]);
  }
}
