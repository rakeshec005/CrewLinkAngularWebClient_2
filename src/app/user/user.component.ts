'use strict';
import { Component, OnInit, OnDestroy} from '@angular/core';
import {userModel} from '../models/userModel';
import {userService} from '../services/userService';
import {roleService} from '../services/roleService';
import { listUserComponent } from '../../app/user/ListUser/listUser.component';

@Component({
  selector: 'app-user',
  templateUrl: "user.component.html",
  styleUrls: ['user.component.css'],
  providers: [roleService, userService],

})
export class userComponent implements OnInit {

  // variable declaration
  private usermodel;
  private rolesList: any;
  private errorString:string;
  
  constructor(private _http: userService, private _roleHttp:roleService) {
  this.usermodel = new userModel("", "", "", "", "", "", "","","",true);
  }
  ngOnInit() {
  this.getRoles();
  }
  ngOnDestroy() {

  }

  getRoles() {
    this._roleHttp.getRoles().subscribe(
      data => {
        this.rolesList = data.results     
      },
      error => alert(error),
      () => console.log("Roles data FetChing completed")
    );

  }

  onChange($event, deviceValue) {
    console.log(deviceValue);
}

  saveUser() {
    console.log("" + this.usermodel.username);
    this._http.createUser(this.usermodel);

  }

}
