import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/Task';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

constructor(private httpClient:HttpClient) { }

  url:string="http://localhost:9000"

  registerUser(data:any){
    console.log(data)
    return this.httpClient.post<any>(this.url+"/api/v1/AddUserInUserTask",data);
  }

  isLoggedIn:boolean=false
  public userLoggedIn(){
    this.isLoggedIn=true;
    console.log(this.isLoggedIn)
  }

  addTask(user:User, task:Task){
    return this.httpClient.put<Task>(this.url+"/api/v1/task/addTaskInUserTask/"+user.userId, task);
  }

  updateTask(user:User, task:Task){
    return this.httpClient.put<Task>(this.url+"/api/v1/task/updateTaskInUserTask/"+user.userId, task);
  }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url+"/api/v1/task/getAllUsersFromUserTask");
  }

  getAllTasksOfUser(user:User):Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.url+"/api/v1/task/getUserByIdInUserTask/"+user.userId);
  }

  getUserById(user:User):Observable<User>{
    return this.httpClient.get<User>(this.url+"/api/v1/task/getUserByIdInUserTask/"+user.userId);
  }

  getUserByEmailId(user:User):Observable<User>{
    return this.httpClient.get<User>(this.url+"/api/v1/task/getUserByEmailIdInUserTask/"+user.emailId);
  }

  getTaskByTaskId(user:User, task:Task):Observable<Task>{
    return this.httpClient.get<Task>(this.url+"/api/v1/task/getByTaskIdInUserTask/"+user.userId+"/"+task.taskId);
  }

  deleteAllUsers():Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteAllUserFromUserTask");
  }

  deleteUserById(user:User):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteUserByIdInUserTask/"+user.userId);
  }

  deleteTaskByTaskId(user:User, task:Task):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteTaskByTaskIdInUserTask/"+user.userId+"/"+task.taskId);
  }

}
