import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenticationService } from '../services/user-authentication.service';
import { UserTaskService } from '../services/user-task.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: UserAuthenticationService,
    public router: Router,private _snackBar: MatSnackBar
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login'])
      this._snackBar.open('Access Denied!! Please Login First', 'ok', {
        duration: 1000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      return false;
    }
  }
}
  

