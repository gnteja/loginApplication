import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';



const appRoutes: Routes = [
  { path: 'register',   component: SignupComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent },
  { path: '',  component: HomeComponent },

   // otherwise redirect to home
  { path: '**', redirectTo: '' }


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(appRoutes),
     FormsModule
  ],
  providers: [
    UserService, 
    AuthGuard, 
    AuthenticationService,
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
