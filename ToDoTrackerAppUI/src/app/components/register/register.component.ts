import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserTaskService } from 'src/app/services/user-task.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    emailId: ['', [Validators.required, 	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    role: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,private router:Router, private userTaskSer:UserTaskService) {}

  get firstName() { return this.registerForm.get("firstName") }

  get lastName() { return this.registerForm.get("lastName") }

  get emailId() { return this.registerForm.get("emailId") }

  get password() { return this.registerForm.get("password"); }

  get confirmPassword() { return this.registerForm.get("confirmPassword"); }

  get role() { return this.registerForm.get("role") }

  onSubmit(): void {
    console.log(" form data--"+this.registerForm.value)
    let data1=JSON.stringify(this.registerForm.value)
  this.userTaskSer.registerUser(this.registerForm.value).subscribe(response=>{
      console.log(response);
     
      this.router.navigate(['user'])
  },
    (error)=>{
      console.log(error);
      alert("Form Not Submitted!!");
    }
  ),
    console.log(this.registerForm.value);
 ()=> this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
     this.registerForm.reset();

    }

  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
        return { mustMatch: false }
    }
    return null;
  }


}
