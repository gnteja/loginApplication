import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service'
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;


  constructor(private router: Router, 
    private user: UserService, 
    private authService: AuthenticationService,
    private alertService: AlertService) { }


  ngOnInit() {

  }


 login() {
    
         this.authService.login(this.username, this.password)
            .subscribe(result => {
                if (result != null){
                     // console.log(result);
                      // console.log(this.user.getUserLogService());
                      this.user.setUserLogService();
                      localStorage.setItem('currentUser', JSON.stringify(result));
                      // console.log(this.user.getUserLogService());
                      this.router.navigate(['dashboard']);
                }
                else{
                  this.alertService.error('Username or password is incorrect');
                }
              },
               error => {
                    console.log(error._body);
                    console.log('login failed');
                    
            });
    }


}