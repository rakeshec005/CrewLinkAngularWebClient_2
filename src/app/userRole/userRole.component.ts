'use strict';
import { Component, OnInit, Input, OnDestroy} from '@angular/core';
//import {Role} from '../models/Role';
//import {FORM_DIRECTIVES } from '@angular/common';
import {roleService} from '../services/roleService';



@Component({
  selector: 'app-userrole',
  templateUrl: "userRole.component.html",
  styleUrls: ['userRole.component.css'],
  providers:[roleService]


})
export class userRoleComponent implements OnInit {

  // roleModel = new Role("akshay");
  private roleList: any;
  private currentPage: number;
  private perPage: number;
  private totalPages: number;
  private totalRecords: number;
   
    
 


  constructor(private _http:roleService) {
    console.log("Inside Role Constructor");

  }

  getRoles(){
     this._http.getRoles().subscribe(
      data => {
        this.roleList = data.results,
          this.currentPage = data.current,
          this.perPage = data.options.perPage,
          this.totalPages = data.last,
          this.totalRecords = data.count
      },
      error => alert(error),
      () => console.log("Roles data FetChing completed")
    );

  }

  ngOnInit() {
    console.log("Inside Oninit of Role");
    this.getRoles();
  }
  ngOnDestroy() { }

   saveRole(form: any): void {  
    console.log('you submitted value:', form);  
  }

 


}
