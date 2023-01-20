import { ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { UserAuthenticationService } from 'src/app/services/user-authentication.service';

@Component({
  selector: 'app-header-sidenav',
  templateUrl: './header-sidenav.component.html',
  styleUrls: ['./header-sidenav.component.css']
})
export class HeaderSidenavComponent implements OnInit {


  //send this id to view task component and the we get all task of user
  userId: any;
  userDetail: any = {}
  notifycount?:number;
 
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private service: UserTaskService, private authService: UserAuthenticationService, public dialog: MatDialog, private overlay: OverlayContainer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   this.service.notifycount.subscribe(res=>{
    this.notifycount=res
   })
  }
  






  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';
  darkClassName = 'theme-dark'
  lightClassName = 'theme-light'


  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.className = darkMode ? this.darkClassName : this.lightClassName
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(this.darkClassName)
      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClassName)
      }
    })
    this.userId = this.service.getEmailId()
    this.getUserData()
}

  getUserData(){
    this.service.getUserById(this.userId).subscribe(data => {
      this.userDetail = data
    })
  }


  methodToGet() {

    this.router.navigate(['view-task'])
    console.log(this.userId);

  }

  methodToGetId() {
    this.router.navigate(['view-archive-task'])
  }




  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);

  }

  userProfileRouteFunc() {
    const dialogRef = this.dialog.open(UserProfileComponent, {

      width: "600px",
      height: "610px"
    })
  }





  logOutFunc() {
    this.userDetail.firstName = ""
    this.authService.logout()
    this.service.removeEmail()
    window.location.reload
    this.router.navigateByUrl('login')
  }

}
