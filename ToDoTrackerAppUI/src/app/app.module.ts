import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { HeaderSidenavComponent } from './components/header-sidenav/header-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
=======
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { ViewArchiveTaskComponent } from './components/view-archive-task/view-archive-task.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ArchiveTaskCardComponent } from './components/archive-task-card/archive-task-card.component';
>>>>>>> 5c8c7460c9406d1251d3f4acf8295874f9e82d73
=======
>>>>>>> 145bf6dceec8ad2a18e54328976f51ccea0119f6

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    HeaderSidenavComponent
=======
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HelpcenterComponent,
    ViewArchiveTaskComponent,
    UserProfileComponent,
    ArchiveTaskCardComponent
>>>>>>> 5c8c7460c9406d1251d3f4acf8295874f9e82d73
=======
    ViewTasksComponent
>>>>>>> 145bf6dceec8ad2a18e54328976f51ccea0119f6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
