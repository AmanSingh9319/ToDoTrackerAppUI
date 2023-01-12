import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { Task } from '../model/Task';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {


  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient:HttpClient) { }

  url:string="http://localhost:9000"

  registerUser(data:any){
    console.log(data)
    return this.httpClient.post<any>(this.url+"/api/v1/AddUserInUserTask",data);
  }

  addTask(userId:number, task:Task){
    return this.httpClient.put<Task>(this.url+"/api/v1/task/addTaskInUserTask/"+userId, task );
  }

  updateTask(userId:number, task:Task){
    return this.httpClient.put<Task>(this.url+"/api/v1/task/updateTaskInUserTask/"+userId, task,{ headers: this.headers });
  }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url+"/api/v1/task/getAllUsersFromUserTask",{ headers: this.headers });
  }

  getUserById(user:User):Observable<User>{
    return this.httpClient.get<User>(this.url+"/api/v1/task/getUserByIdInUserTask/"+user.userId,{ headers: this.headers });
  }
/////////////////////////////|||||||||||||||||||||||||||||||||||||||||||||||||||||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

   

  
  
  endpoint: string = 'http://localhost:9000/api/v1';


  getAllTasksOfUser(user :number):Observable<Task[]>{
    let api = `${this.endpoint}/getAllTasksOfUserFromUserTask/${user}`;
    return this.httpClient.get<Task[]>(api);
  }
  

  getUserByEmailId(emailId :string):Observable<any>{

    return this.httpClient.get<any>(this.url+"/api/v1/getUserByEmailIdInUserTask/"+emailId);
  }

  getTaskByTaskId(userId:number, taskId:number):Observable<Task>{
    return this.httpClient.get<Task>(this.url+"/api/v1/task/getByTaskIdInUserTask/"+userId+"/"+taskId);
  }

  deleteAllUsers():Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteAllUserFromUserTask",{ headers: this.headers });
  }

  deleteUserById(user:User):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteUserByIdInUserTask/"+user.userId,{ headers: this.headers });
  }

  deleteTaskByTaskId(userId:number, taskId:number):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteTaskByTaskIdInUserTask/"+userId+"/"+taskId);
  }



  ///////////////////////////////////////////////////////Login Part//////////////////////////////////////////////////////////////////////////////////






}
