'use strict';
import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl:"role.component.html",
  styleUrls: ['role.component.css']

})
export class roleComponent implements OnInit {
  
  constructor(){
    console.log("Inside Role Constructor");
  }

  ngOnInit(){
    console.log("Inside Oninit of Role");
  }
   
  
}
