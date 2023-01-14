import { ChangeDetectorRef, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-header-sidenav',
  templateUrl: './header-sidenav.component.html',
  styleUrls: ['./header-sidenav.component.css']
})
export class HeaderSidenavComponent {

 
  //send this id to view task component and the we get all task of user
  userId :any;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router,private service : UserTaskService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  
  
  methodToGet(){
   this.userId = this.service.getEmailId()
   this.router.navigate(['view-task/'+this.userId])
   console.log(this.userId);
   
  }

  methodToGetId(){
     this.router.navigate(['view-archive-task'])}

  


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  userProfileRouteFunc(){
    this.router.navigateByUrl("user-profile")
  }

  logOutFunc(){
    
  }

}
