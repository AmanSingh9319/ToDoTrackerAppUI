import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  constructor(private httpClient: HttpClient) {}

  url: string = 'http://localhost:9000';

<<<<<<< HEAD
  loginUser(data: any): Observable<any> {
    return this.httpClient.post<any>(this.url + '/api/v2/login', data);
  }
=======
url:string="http://localhost:9000";
  hideIcon?:boolean;
generateToken(data:any):Observable<any>{
  return this.httpClient.post<any>(this.url+"/api/v2/login",data);
 }
>>>>>>> 1b2b227fde048c781366c6d891f23d988d4165b3

  isLoggedIn: boolean = false;

  public userLoggedIn() {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn);
  }
}
