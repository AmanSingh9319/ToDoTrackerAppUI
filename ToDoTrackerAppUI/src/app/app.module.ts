import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderSidenavComponent } from './components/header-sidenav/header-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { ArchiveTaskCardComponent } from './components/archive-task-card/archive-task-card.component';
import { ViewTasksComponent } from './components/view-tasks/view-tasks.component';
import { ViewArchiveTaskComponent } from './components/view-archive-task/view-archive-task.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchComponent } from './components/search/search.component';
import {MatInputModule} from '@angular/material/input';
import { ViewTodayTasksComponent } from './components/view-filtered-tasks/view-today-tasks/view-today-tasks.component';
import { ViewUpcomingTasksComponent } from './components/view-filtered-tasks/view-upcoming-tasks/view-upcoming-tasks.component';
import { ViewPersonalTasksComponent } from './components/view-filtered-tasks/view-personal-tasks/view-personal-tasks.component';
import { ViewWorkTasksComponent } from './components/view-filtered-tasks/view-work-tasks/view-work-tasks.component';
import { SettingsComponent } from './components/settings/settings.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { AuthInterceptor } from './services/authconfig.interceptor';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { ViewCompletedTaskComponent } from './components/view-filtered-tasks/view-completed-task/view-completed-task.component';
import { SendConfirmationComponent } from './components/view-filtered-tasks/send-confirmation/send-confirmation.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSidenavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HelpcenterComponent,
    ViewArchiveTaskComponent,
    UserProfileComponent,
    ArchiveTaskCardComponent,
    ViewTasksComponent,
    SearchComponent,
    ViewTodayTasksComponent,
    ViewUpcomingTasksComponent,
    ViewPersonalTasksComponent,
    ViewWorkTasksComponent,
    SettingsComponent,
    PageNotFoundComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    ViewCompletedTaskComponent,
    SendConfirmationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatGridListModule,
    MatSelectModule,
    MatSlideToggleModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
