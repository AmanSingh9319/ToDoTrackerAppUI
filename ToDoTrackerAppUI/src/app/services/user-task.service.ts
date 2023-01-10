import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

constructor(private httpClient:HttpClient) { }

url:string="http://localhost:8083"

registerUser(data:any){
    console.log(data)
   return this.httpClient.post<any>(this.url+"/api/v1/AddUserInUserTask",data);
  }

  isLoggedIn:boolean=false


    public userLoggedIn(){
    this.isLoggedIn=true;
    console.log(this.isLoggedIn)

  }
  
}
