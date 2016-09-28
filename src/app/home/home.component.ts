'use strict';
import { Component, OnInit} from '@angular/core';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import {HttpService} from '../httpService';

@Component({
  selector: 'app-home',
  templateUrl: "home.component.html",
  styleUrls: ['home.component.css'],
  providers: [HttpService]

})
export class HomeComponent implements OnInit {
  private userList: any;
  private toasterService: ToasterService;
  



  constructor(toasterService: ToasterService,private _httpservice: HttpService) {
    this.toasterService = toasterService;

  }

  ngOnInit() {
    //called after the constructor and called  after the first ngOnChanges()
    this.getSalaryDetails();
  }

  getSalaryDetails() {
    this._httpservice.getSalary().subscribe(
      data => this.userList = JSON.stringify(data),
      error => alert(error),
      () => console.log("Finish")
    );

  }

  removeUser(user) {
    this.userList.splice(this.userList.indexOf(user), 1);
    this.toasterService.pop('success', 'User deleted Successfully!!!!', 'User deleted Successfully!!!!!!');
    console.log("" + user);

  }


}
