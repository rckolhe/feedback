import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackserviceService {
  formdata;
  constructor() {
    this.formdata={};
   }
  setuserdata(val:object){
    this.formdata=val;
  }
  getuserdata():Observable<any>{
    return this.formdata;
  }
}
