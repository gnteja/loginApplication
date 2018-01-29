import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { UserService } from './user.service';





@Injectable()
export class AuthGuard implements CanActivate {
	constructor (private router: Router, private user: UserService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
           return this.user.getUserLogService(); 
	}
 
}

