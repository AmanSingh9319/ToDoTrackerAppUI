import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

constructor(private httpClient:HttpClient) { }

url:string="http://localhost:9000";
  
generateToken(data:any):Observable<any>{
  return this.httpClient.post<any>(this.url+"/api/v2/login",data);
 }



 //to check that the user is logged in or not !!
loginUser(token: any) {
 localStorage.setItem("token", token);
 return true;
}

isLoggedIn() {
 let token = localStorage.getItem("token");
 if (token == undefined || token === "" || token == null) {
   return false;
 }
 else {
   return true;
 }
}

logout() {
 localStorage.removeItem('token');
 return true;
}

getToken() {
 return localStorage.getItem("token");
}
}
