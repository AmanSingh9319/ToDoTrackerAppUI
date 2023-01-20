import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';
import { UserTaskService } from 'src/app/services/user-task.service';
import { ViewTasksComponent } from '../view-tasks/view-tasks.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent {

  loginForm = new FormGroup({
    emailId: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })
  email: string = "";

  get emailId() {
    return this.loginForm.get('emailId');
  }
  get password() {
    return this.loginForm.get('password');
  }


  constructor(private _snackBar: MatSnackBar, private taskService: UserAuthenticationService, private router: Router, private userTaskSer: UserTaskService) { }



  onLogin() {
    this.taskService.generateToken(this.loginForm.value).subscribe(
      (response: any) => {
        this.taskService.loginUser(response.secretKeyToken.token);
        this.taskService.hideIcon = true
        this.userTaskSer.captureEmail(response.user.emailId)
        this.router.navigateByUrl('view-task')
        this._snackBar.open('Congrats!!You have logged In!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });

      },
      (err) => {
        alert("invalid credentials")
        console.log(err.message);
      })
    // window.location.reload()
  }

  registerRoutefunc() {
    this.router.navigateByUrl("register")
  }

  show: boolean = false;
  passwordFunc() {
    this.show = !this.show;
  }

}
