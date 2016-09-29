'use strict';
import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import {roleService} from '../../services/roleService';



@Component({
  selector: 'app-createRole',
  templateUrl: "createRole.component.html",
  styleUrls: ['createRole.component.css'],
  providers:[roleService]


})
export class createRoleComponent implements OnInit {

  constructor(private _http:roleService) {
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
