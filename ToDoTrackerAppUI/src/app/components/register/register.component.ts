import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { TaskArchiveService } from 'src/app/services/task-archive.service';
import { UserTaskService } from 'src/app/services/user-task.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {




  registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    emailId: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    role: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private userTaskSer: UserTaskService
    , private taskarc: TaskArchiveService) { }

  formData = new FormData
  file: any
  onFileSelect(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
    this.formData.append("file", this.file);
  }


  onSubmit(): void {
      if (this.file == null) {
      console.log("user");
      console.log(this.registerForm.value);
      this.userTaskSer.registerUserWithNoImage(this.registerForm.value).subscribe(
        response => {

          this._snackBar.open('Congrats!!You have submiited the form!! Hello  {' + response.firstName + '}', 'success', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary']
          });
          this.registerForm.reset();
          this.router.navigate(['login'])
        }
      ), (err: HttpErrorResponse) => {
        if (err.status == 409) {
          alert("Registration failed! User Already Exists");
          console.log(err.message);
        } else {
          alert("Server Site Problem");
          console.log(err.message);
        }
      }
    } else {

      this.formData.append("user", JSON.stringify(this.registerForm.value))
      this.userTaskSer.registerUser(this.formData).subscribe(response => {
        this._snackBar.open('Congrats!!You have submiited the form!! Hello  {' + response.firstName + '}', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        this.registerForm.reset();
        this.router.navigate(['login'])
      },
        (error: HttpErrorResponse) => {

          if (error.status == 409) {
            alert("Registration failed! User Already Exists");
            console.log(error.message);
          } else {
            alert("Server Site Problem");
            console.log(error.message);
          }


        }
      )
    }
  }


  registerRoutefunc() {
    this.router.navigateByUrl("login")
  }












  //     console.log(" form data--"+this.registerForm.value)
  //     let data1=JSON.stringify(this.registerForm.value)
  //     this.userTaskSer.registerUser(this.registerForm.value).subscribe(response=>{
  //       console.log(response);

  //       this.router.navigate(['user'])
  //   },
  //     (error)=>{
  //       console.log(error);
  //       alert("Form Not Submitted!!");
  //     }
  //   ),
  //     console.log(this.registerForm.value);
  //  ()=> this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
  //       duration: 5000,
  //       panelClass: ['mat-toolbar', 'mat-primary']
  //     });
  //      this.registerForm.reset();



  get firstName() { return this.registerForm.get("firstName") }

  get lastName() { return this.registerForm.get("lastName") }

  get emailId() { return this.registerForm.get("emailId") }

  get password() { return this.registerForm.get("password"); }

  get role() { return this.registerForm.get("role") }


  get emailId() {
    return this.registerForm.get('emailId');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get role() {
    return this.registerForm.get('role');
  }
}
