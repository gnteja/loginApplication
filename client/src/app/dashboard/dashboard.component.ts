import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user: UserService,
  	private router: Router,
  	private authService: AuthenticationService) { }

  ngOnInit() {

  }

 logout(){
    this.authService.logout();
    this.router.navigate(['login']);
    
	}

}
