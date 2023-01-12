import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';
import { UserTaskService } from 'src/app/services/user-task.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    emailId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  email: string = '';

  get emailId() {
    return this.loginForm.get('emailId');
  }
  get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private httpClient: HttpClient,
    private _snackBar: MatSnackBar,
    private loginser: UserAuthenticationService,
    private taskService: UserTaskService,
    private router: Router
  ) {}

  error: String = '';

  onLogin() {
    console.log(this.email);
    this.router.navigate(['view-task']);
    // this.loginser.loginUser(this.loginForm.value).subscribe(response=>{
    //   localStorage.setItem("User_id",response.userid);
    //   console.log(response.token+" "+response.username+" "+response.userid)
    //   localStorage.setItem("Jwt_Token",response.token);
    //   localStorage.setItem("User_Name",response.UserName);
    //   this.loginser.userLoggedIn();
    //   this.router.navigate(['admin'])
    // },(error=>{
    //   console.log(error);
    //   alert("Login Failed!!");

    // }))
    console.log(this.loginForm.value); // .value is a property of ngform: that gives the value
    // this._snackBar.open('Congrats!!You have logged In!!', 'success', {
    //   duration: 5000,
    //   panelClass: ['mat-toolbar', 'mat-primary']
    // });
    this.loginForm.reset();
  }

  registerRoutefunc() {
    this.router.navigateByUrl('register');
  }
}
