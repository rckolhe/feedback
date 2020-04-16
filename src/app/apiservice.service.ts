import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  formdata;
  baseurl:string="http://localhost/angular_admin/php/";
  constructor(public httpClient:HttpClient) {
    this.formdata={};
   }
  setuserdata(val:object){
    this.formdata=val;
  }
  getuserdata():Observable<any>{
    return this.formdata;
  }

  public submission(name,email,subject,message,smiley){
    return this.httpClient.post<any>(this.baseurl + 'submit.php',{name,email,subject,message,smiley})
        .pipe(map(Feedback=>{
          return Feedback;
        }));
  }
}
