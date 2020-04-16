import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-smileyform',
  templateUrl: './smileyform.component.html',
  styleUrls: ['./smileyform.component.css']
})
export class SmileyformComponent implements OnInit {

  public smileydata={};
  public head="Please Rating Us...";
  public fdata;
  public alldata;
  constructor(private _service:ApiserviceService,public router:Router) {
    //console.log(_service.getuserdata());
    this.fdata=_service.getuserdata();
   
    console.log("fdata:",this.fdata);
    console.log("name:",this.fdata.name);
   }

  ngOnInit() {}

  onSubmit(data){
    this.smileydata=data;
    
    console.log(this.smileydata);

    this.alldata={...this.fdata, ...data};
    console.log("All Data:",this.alldata);
    //console.log("name:",this.alldata.name);
    //this._service.setuserdata(this.smileydata);
    
    this._service.submission(this.alldata.name,this.alldata.email,this.alldata.subject,
                            this.alldata.message,this.alldata.smiley)
      .pipe(first())
      .subscribe(
        data=>{
          this.router.navigate(['thankyou'])
        },
        error=>{

        }
     );

    //this.router.navigate(['/thankyou',this.smileydata]);
  }

}
