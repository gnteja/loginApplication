import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
	username: string;
	email: string;
	password: string;

	listofUsers: any;



  constructor(private authenticationService: AuthenticationService,
  				private alertService: AlertService) { }

  ngOnInit() {
  		this.reloadTable();
  	
  }

  signup(){

  	   this.authenticationService.signup(this.username, this.password, this.email)
  	   .subscribe(result => {
                 if (result.length > 0){
                  this.alertService.success('registration successful');
                  
                }
                else{
                  this.alertService.error('Username already Exist try with another username ');
                }
              },
               error => {
                     console.log('SignUp failed');
                     console.log(error._body);
            });

  	   	this.reloadTable();
  }


  reloadTable(){

  	 this.authenticationService.userGetAll()
    	.subscribe(result => {
            
                   console.log(result);
                   this.listofUsers = result;

              },
               error => {
                    console.log(error._body);
                    
            });

  }
}
