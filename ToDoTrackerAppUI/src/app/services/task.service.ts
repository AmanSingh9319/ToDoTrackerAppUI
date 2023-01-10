import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private HttpClientObj: HttpClient) { }

  registerURL:string = "http://localhost:9000/api/v1/AddUserInUserTask";


}
