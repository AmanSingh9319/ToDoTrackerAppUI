import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { Task } from '../model/Task';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  constructor(private httpClient:HttpClient) { }
  notifycount = new BehaviorSubject<number>(0)
  private _refresh = new Subject<void>();

  get Refresh(){
    return this._refresh
  }
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  

  url:string="http://localhost:9000"
  
  registerUser(data:any){
    console.log(data)
    return this.httpClient.post<any>(this.url+"/api/v1/AddUserInUserTask",data);
  }

  addTask(userId:number, task:Task){
    return this.httpClient.put<Task>(this.url+"/api/v1/task/addTaskInUserTask/"+userId, task ).pipe(tap(()=>{
      this.Refresh.next()
    }));
  }

  updateTask(userId:any, task:Task){
    return this.httpClient.put<Task>(this.url+"/api/v1/task/updateTaskInUserTask/"+userId, task).pipe(tap(()=>{
      this.Refresh.next()
    }));
  }

<<<<<<< HEAD
  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url+"/api/v1/task/getAllUsersFromUserTask",{ headers: this.headers });
  }

  getUserById(user:User):Observable<User>{
    return this.httpClient.get<User>(this.url+"/api/v1/task/getUserByIdInUserTask/"+user.userId,{ headers: this.headers });
  }

  getUserByEmailId(user:User):Observable<User>{
    return this.httpClient.get<User>(this.url+"/api/v1/task/getUserByEmailIdInUserTask/"+user.emailId);
=======
 
///////////////////////////// All Get request \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

   

  
  
  endpoint: string = 'http://localhost:9000/api/v1';
  currentEmailId:any ;



  captureEmail(email: any) {
    this.currentEmailId = localStorage.setItem("email", email);
    return true;
   }
   
  removeEmail() {
    localStorage.removeItem('email');
    return true;
   }
  getEmailId() {
    return localStorage.getItem('email');
   }
   
  
  getAllTasksOfUser(emailId:any):Observable<Task[]>{
    let api = `${this.endpoint}/task/getAllTasksOfUserFromUserTask/${emailId}`;
    return this.httpClient.get<Task[]>(api);
  }
  

  getUserByEmailId(emailId :string):Observable<any>{

    return this.httpClient.get<any>(this.url+"/api/v1/task/getUserByEmailIdInUserTask/"+emailId);
>>>>>>> 1b2b227fde048c781366c6d891f23d988d4165b3
  }

  getTaskByTaskId(userId:number, taskId:number):Observable<Task>{
    return this.httpClient.get<Task>(this.url+"/api/v1/task/getByTaskIdInUserTask/"+userId+"/"+taskId);
  }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url+"/api/v1/task/getAllUsersFromUserTask");
  }

  getUserById(user:any):Observable<User>{
    return this.httpClient.get<User>(this.url+"/api/v1/task/getUserByIdInUserTask/"+user).pipe(tap(()=>{
      this.Refresh.next()
    }));;
  }

  getCompletedTask(userId:any):Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.url+"/api/v1/completed/"+userId);
  }



  ///////////////////////////////////////////DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


  deleteAllUsers():Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteAllUserFromUserTask");
  }

  deleteUserById(user:User):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteUserByIdInUserTask/"+user.userId);
  }

  deleteTaskByTaskId(userId:number, taskId:number):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteTaskByTaskIdInUserTask/"+userId+"/"+taskId).pipe(tap(()=>{
      this.Refresh.next()
    }));;
  }



  






}
