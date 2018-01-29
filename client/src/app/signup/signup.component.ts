import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { AlertService } from '../alert.service';
import { AuthenticationService } from '../authentication.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userEmail: string;
  username: string;
  password: string;
  confirmpassword : string;

  /*@ViewChild('username') username;
  @ViewChild('usermail') usermail;
  @ViewChild('password') password;
  @ViewChild('confirmpassword') confirmpassword;*/

  constructor(
  	private router: Router, 
  	private user: UserService,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  signup(){


    //console.log(this.user.password);
    
    if (this.password === this.confirmpassword){

   		// console.log(this.user.username.value, this.user.email.value, this.user.password.value);
       // console.log("Passwords matched!");
        this.authenticationService.signup(this.username, this.password, this.userEmail)
        .subscribe(result => {
                if (result.length > 0){
                  this.alertService.success(result,true);
                  this.router.navigate(['login']);
                  
                }
                else{
                  this.alertService.error('Username already Exist try with another username ');
                }
              },
               error => {
                     console.log('SignUp failed');
                     console.log(error._body);
            });
    } 

    else{
      this.alertService.error("Password and confirm Password didn't matched");
    }
    
  }

}
