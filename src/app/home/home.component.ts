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
  
  // variable declaration
  private salaryList: any;
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
      data => this.salaryList = data.results,
      error => alert(error),
      () => console.log("Finish")
    );

  }

  removeUser(salary) {
    this.salaryList.splice(this.salaryList.indexOf(salary), 1);
    this.toasterService.pop('success', 'User deleted Successfully!!!!', 'User deleted Successfully!!!!!!');
  }


}
