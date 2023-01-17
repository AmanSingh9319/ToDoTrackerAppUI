import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/Task';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class TaskArchiveService {
  currentUserId:any;
  constructor(private httpClient:HttpClient) { }

  url:string="http://localhost:9000"

  
insertUserInArchive(data:any){
    console.log(data)
    return this.httpClient.post<any>(this.url+"/api/v3/addUserInArchive",data);
}

addTaskInArchive(task:Task,userId:number){
  return this.httpClient.put<Task>(this.url+"/api/v3/addTaskInArchive/"+userId, task);
}

updateTaskInArchive(user:User, task:Task){
  return this.httpClient.put<Task>(this.url+"/api/v3/updateTaskInArchive/"+user.userId, task);
}

getAllTasksInArchive(userId:any):Observable<Task[]>{
  return this.httpClient.get<Task[]>(this.url+"/api/v3/getAllTasksFromArchive/"+userId);
}

deleteTaskByInArchive(userId:number,taskId:any):Observable<boolean>{
  return this.httpClient.delete<boolean>(this.url+"/api/v3/deleteTaskFromArchive/"+userId+"/"+taskId);
}

getTaskByTaskIdFromArchive(userId:number, taskId:number):Observable<Task>{
  return this.httpClient.get<Task>(this.url+"/api/v3/getByTaskIdInUserTask/"+userId+"/"+taskId);
}

}
