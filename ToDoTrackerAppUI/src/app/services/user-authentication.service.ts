import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

constructor(private httpClient:HttpClient) { }

url:string="http://localhost:8086";
  
loginUser(data:any):Observable<any>{
     return this.httpClient.post<any>(this.url+"/api/v2/AddUserInUserAuth",data);
    }
  
isLoggedIn:boolean=false
  
public userLoggedIn(){
      this.isLoggedIn=true;
      console.log(this.isLoggedIn)
  
    }
}
