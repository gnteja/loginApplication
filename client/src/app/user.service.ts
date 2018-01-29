import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';





@Injectable()
export class UserService {

    private userLogService: boolean;

    constructor(){
       this.userLogService = false;


    }
    setUserLogService(){
        this.userLogService = true;
    }

    logoutUserService(){
        this.userLogService = false;
    }

    getUserLogService(){
        return this.userLogService;
    }


      }
    

