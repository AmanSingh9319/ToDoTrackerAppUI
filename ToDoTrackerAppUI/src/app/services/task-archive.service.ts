import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/Task';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class TaskArchiveService {

  constructor(private httpClient:HttpClient) { }

  url:string="http://localhost:9000"

insertUserInArchive(data:any){
    console.log(data)
    return this.httpClient.post<any>(this.url+"/api/v3/addUserInArchive",data);
}

addTaskInArchive(user:User, task:Task){
  return this.httpClient.put<Task>(this.url+"/api/v3/addTaskInArchive/"+user.userId, task);
}

updateTaskInArchive(user:User, task:Task){
  return this.httpClient.put<Task>(this.url+"/api/v3/updateTaskInArchive/"+user.userId, task);
}

getAllTasksInArchive(user:User):Observable<Task[]>{
  return this.httpClient.get<Task[]>(this.url+"/api/v3/getAllTasksFromArchive/"+user.userId);
}

deleteTaskByInArchive(user:User, task:Task):Observable<boolean>{
  return this.httpClient.delete<boolean>(this.url+"/api/v3/deleteTaskFromArchive/"+user.userId+"/"+task.taskId);
}

}
