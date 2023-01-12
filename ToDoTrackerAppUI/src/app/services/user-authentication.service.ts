import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {
  constructor(private httpClient: HttpClient) {}

  url: string = 'http://localhost:9000';

  loginUser(data: any): Observable<any> {
    return this.httpClient.post<any>(this.url + '/api/v2/login', data);
  }

  isLoggedIn: boolean = false;

  public userLoggedIn() {
    this.isLoggedIn = true;
    console.log(this.isLoggedIn);
  }
}
