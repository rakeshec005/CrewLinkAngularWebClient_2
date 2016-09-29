'use strict';
import { Component, OnInit, Input, OnDestroy} from '@angular/core';
//import {Role} from '../models/Role';
//import {FORM_DIRECTIVES } from '@angular/common';



@Component({
  selector: 'app-userrole',
  templateUrl: "userRole.component.html",
  styleUrls: ['userRole.component.css'],


})
export class userRoleComponent implements OnInit {

  // roleModel = new Role("akshay");
    
 


  constructor() {
    console.log("Inside Role Constructor");

  }

  ngOnInit() {
    console.log("Inside Oninit of Role");
  }
  ngOnDestroy() { }

   saveRole(form: any): void {  
    console.log('you submitted value:', form);  
  }

 


}
