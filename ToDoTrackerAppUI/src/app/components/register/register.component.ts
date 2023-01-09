import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    email: ['', [Validators.required, 	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    gender: ['']
  });

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,private router:Router, private regser:RegisterService) {}

  get firstName() { return this.registerForm.get("firstName") }

  get lastName() { return this.registerForm.get("lastName") }

  get email() { return this.registerForm.get("email") }

  get password() { return this.registerForm.get("password"); }

  get confirmPassword() { return this.registerForm.get("confirmPassword"); }


  onSubmit(): void {
    console.log(" form data--"+this.registerForm.value)
    let data1=JSON.stringify(this.registerForm.value)
  this.regser.registerUser(this.registerForm.value).subscribe(response=>{
      console.log(response);
      this.regser.userLoggedIn();
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
