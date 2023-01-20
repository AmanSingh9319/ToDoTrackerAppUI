import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap, throwError } from 'rxjs';
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


  url:string="http://localhost:9000"
  
  registerUser(data:any){
    console.log(data)
    return this.httpClient.post<any>(this.url+"/api/v1/AddUserInUserTask",data);
  }

  registerUserWithNoImage(data:any){
    console.log(data)
    return this.httpClient.post<any>(this.url+"/api/v1/AddUserInUserTaskNoImage",data);
  }
  

  addTask(emailId:any, task:Task){
    return this.httpClient.put<Task>(this.url+"/api/v1/task/addTaskInUserTask/"+emailId, task ).pipe(tap(()=>{
      this.Refresh.next()
    }));
  }

  updateTask(emailId:any, task:Task){
    return this.httpClient.put<Task>(this.url+"/api/v1/task/updateTaskInUserTask/"+emailId, task).pipe(tap(()=>{
      this.Refresh.next()
    }));
  }



 
///////////////////////////// All Get request \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

   

  
  
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
    let api = `${this.url}/api/v1/task/getAllTasksOfUserFromUserTask/${emailId}`;
    return this.httpClient.get<Task[]>(api);
  }
  

  getUserByEmailId(emailId :string):Observable<any>{

    return this.httpClient.get<any>(this.url+"/api/v1/task/getUserByEmailIdInUserTask/"+emailId);
  }

  getTaskByTaskId(userId:number, taskId:number):Observable<Task>{
    return this.httpClient.get<Task>(this.url+"/api/v1/task/getByTaskIdInUserTask/"+userId+"/"+taskId);
  }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url+"/api/v1/task/getAllUsersFromUserTask");
  }

  getUserById(emailId:any):Observable<User>{
    return this.httpClient.get<User>(this.url+"/api/v1/task/getUserByIdInUserTask/"+emailId).pipe(tap(()=>{
      this.Refresh.next()
    }));;
  }

  getCompletedTask(emailId:any):Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.url+"/api/v1/completed/"+emailId);
  }



  ///////////////////////////////////////////DELETE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


  deleteAllUsers():Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteAllUserFromUserTask");
  }

  deleteUserById(user:User):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteUserByIdInUserTask/"+user.userId);
  }

  deleteTaskByTaskId(email:any, taskname:any):Observable<boolean>{
    return this.httpClient.delete<boolean>(this.url+"/api/v1/task/deleteTaskByTaskIdInUserTask/"+email+"/"+taskname).pipe(tap(()=>{
      this.Refresh.next()
    }));;
  }



  






}
