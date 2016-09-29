'use strict';
import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import {roleService} from '../services/roleService';
import { createRoleComponent } from '../../app/userRole/createRole/createRole.component';



@Component({
  selector: 'app-userrole',
  templateUrl: "userRole.component.html",
  styleUrls: ['userRole.component.css'],
  providers:[roleService],
  


})
export class userRoleComponent implements OnInit {

  
  private rolesList: any;
  private currentPage: number;
  private perPage: number;
  private totalPages: number;
  private totalRecords: number;
   
    
 


  constructor(private _http:roleService) {
    console.log("Inside Role Constructor");

  }

  
  ngOnInit() {
    console.log("Inside Oninit of Role");
    this.getRoles();
  }
  ngOnDestroy() { }
  getRoles(){
     this._http.getRoles().subscribe(
      data => {
        this.rolesList = data.results,
          this.currentPage = data.current,
          this.perPage = data.options.perPage,
          this.totalPages = data.last,
          this.totalRecords = data.count
      },
      error => alert(error),
      () => console.log("Roles data FetChing completed")
    );

  }





}
