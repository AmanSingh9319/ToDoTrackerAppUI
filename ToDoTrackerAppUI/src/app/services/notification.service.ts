import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  currentUser?:number; 
  endpoint: string = 'http://localhost:9000/api/v4';

  constructor( private httpClient : HttpClient) { }

  
  addTaskInNotification(task :any){
    let api = `${this.endpoint}/addTaskInNotification/${this.currentUser}`;
    return this.httpClient.put<any>(api,task);
  }

  updateTaskInNotification(task :any){
    let api = `${this.endpoint}/updateTaskInNotification/${this.currentUser}`;
    return this.httpClient.put<any>(api,task);
  }

  getAllTasksFromNotification(email:any):Observable<any>{
    // let api = `${this.endpoint}/notification/getAllTasksFromNotification/${email}`;
   
    return this.httpClient.get<any>("http://localhost:9000/api/v4/notification/getAllTasksFromNotification/"+email);
  }

  getAllUser():Observable<any>{
    let api = `${this.endpoint}/notification/getAllUser`;
    return this.httpClient.get<any>(api);
  }

  deleteTaskFromNotification(userId:any, taskname:any):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.endpoint+"/deleteFromNotification/"+userId+"/"+taskname);
  }
}
