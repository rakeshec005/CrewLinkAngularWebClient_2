'use strict';
import { Component, OnInit, OnDestroy} from '@angular/core';
import {userModel} from '../../models/userModel';
import {userService} from '../../services/userService';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'app-listUser',
  templateUrl: "listUser.component.html",
  styleUrls: ['listUser.component.css'],
  providers: [userService]

})
export class listUserComponent implements OnInit {

  // variable declaration
  
  private usersList: any;
  private errorString:string;
  private toasterService: ToasterService;
  
  constructor(toasterService: ToasterService,private _http: userService) {
   this.toasterService = toasterService;
  }
  ngOnInit() {
  this.getUsers();
  }
  ngOnDestroy() {

  }

  getUsers() {
    this._http.getUsers().subscribe(
      data => {
        this.usersList = data.results     
      },
      error => alert(error),
      () => console.log("Roles data FetChing completed")
    );

  }

  removeUser(user){
    this.usersList.splice(this.usersList.indexOf(user), 1);
    this.toasterService.pop('success', 'User deleted Successfully!!!!', 'User deleted Successfully!!!!!!');

  }


}
