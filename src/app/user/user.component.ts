'use strict';
import { Component} from '@angular/core';
import {userModel} from '../models/userModel';

@Component({
  selector: 'app-user',
  templateUrl: "user.component.html",
  styleUrls: ['user.component.css']

})
export class userComponent {
   usermodel = new userModel("","","","","",""); 
  
  constructor() {

  }

  saveUser() {
    console.log("" + this.usermodel.username);

  }

}
