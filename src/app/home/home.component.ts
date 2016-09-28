'use strict';
import { Component, OnInit} from '@angular/core';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

@Component({
  selector: 'app-home',
  templateUrl: "home.component.html",
  styleUrls: ['home.component.css']

})
export class HomeComponent implements OnInit {
  userList: any;
  private toasterService: ToasterService;
  
 

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
    
    this.userList = [{

      "userName": "anurag",
      "firstName": "Anurag",
      "lastName": "Sharma",
      "email": "anurag@gmail.com",
      "createdTime": "2016-04-25T06:40:49.851+0000",
      "roleCode": "admin",

      "markDelete": true,
      "mobileNo": 7406465159.0,
      "address": "bangalore",
      "userActive": true,
      "city": "Bengauru"
    },
      {

        "userName": "c1",
        "firstName": "santosh",
        "lastName": "sahu",
        "email": "c1@gmail.com",
        "createdTime": "2016-05-12T10:03:50.248+0000",
        "markDelete": true,
        "roleCode": "Planner",

        "mobileNo": 7406465159.0,
        "address": "bangalore",
        "userActive": true,
        "city": "Bengauru"
      },
      {

        "userName": "c2",
        "firstName": "c2",
        "lastName": "c2",
        "email": "c2@gmail.com",
        "createdTime": "2016-05-12T10:04:02.270+0000",
        "markDelete": true,
        "roleCode": "Planner",

        "mobileNo": 7406465159.0,
        "address": "bangalore",
        "userActive": true,
        "city": "Bengauru"
      },
      {

        "userName": "c3",
        "firstName": "c3",
        "lastName": "c3",
        "email": "c3@gmail.com",
        "createdTime": "2016-05-12T10:04:12.690+0000",
        "markDelete": true,
        "roleCode": "Planner",

        "mobileNo": 7406465159.0,
        "address": "bangalore",
        "userActive": true,
        "city": "Bengauru"
      },
      {

        "userName": "c4",
        "firstName": "c4",
        "lastName": "c4",
        "email": "c4@gmail.com",
        "createdTime": "2016-05-12T10:04:21.985+0000",
        "markDelete": true,
        "roleCode": "Planner",

        "mobileNo": 7406465159.0,
        "address": "bangalore",
        "userActive": true,
        "city": "Bengauru"
      },
      {

        "password": "test",
        "userName": "test",
        "firstName": "santosh",
        "lastName": "sahu",
        "address": "bangalore",
        "email": "santosh.citech@gmail.com",
        "mobileNo": 7406465159.0,
        "createdTime": "2016-07-13T23:37:58.189+0000",
        "markDelete": false,
        "roleCode": "admin",
        "userActive": false,

        "city": "Bengauru"
      }];

  }

  ngOnInit() {
    //called after the constructor and called  after the first ngOnChanges() 
  }
  

  removeUser(user) {
   /* var toast: Toast = {
    type: 'success',
    title: 'close button',
    showCloseButton: true
};*/
    this.userList.splice(this.userList.indexOf(user), 1);
    this.toasterService.pop('success', 'User deleted Successfully!!!!', 'User deleted Successfully!!!!!!');
    console.log("" + user);

  }


}
