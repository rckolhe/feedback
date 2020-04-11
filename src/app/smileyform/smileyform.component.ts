import { Component, OnInit } from '@angular/core';
import { FeedbackserviceService } from '../feedbackservice.service';

@Component({
  selector: 'app-smileyform',
  templateUrl: './smileyform.component.html',
  styleUrls: ['./smileyform.component.css']
})
export class SmileyformComponent implements OnInit {

  public head="Please Rating Us...";
  public fdata;
  

  constructor(private feedservice:FeedbackserviceService) {
    console.log(feedservice.getuserdata());
    this.fdata=feedservice.getuserdata;
   /* this.feedservice.getuserdata().subscribe(
        resultArray=>this.fdata=resultArray,
        error=>console.log("Error:",error)
        
      )*/
    console.log("fdata:",this.fdata);
   }

   

  ngOnInit() {
    
  }

}
