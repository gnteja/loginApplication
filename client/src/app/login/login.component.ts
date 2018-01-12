import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('username');
  @ViewChild('password');


  ngOnInit() {

  }
constructor(private router: Router, private user: UserService) { }

 login() {

   let username = this.username.nativeElement;
   let password = this.password.nativeElement;

  // console.log(username.value, password.value);

  // this.loading = true;
  //       this.authenticationService.login(this.model.username, this.model.password)
  //           .subscribe(result => {
  //               if (result === true) {
  //                   this.router.navigate(['/dashboard']);
  //               } else {
  //                   this.error = 'Username or password is incorrect';
  //                   this.loading = false;
  //               }
  //           });
    }

}