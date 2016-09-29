'use strict';
import { Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: "user.component.html",
  styleUrls: ['user.component.css']

})
export class userComponent {
  userdetails : Object = {};
  constructor() {

  }

  saveUser(){
    console.log(""+this.userdetails);

  }

}
