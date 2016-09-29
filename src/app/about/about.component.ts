'use strict';
import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-about',
  templateUrl: "about.component.html",
  styleUrls: ['about.component.css']

})
export class aboutComponent {
  constructor(private router: Router) { }

  ngOnInit() {

  }
  navigate() {
    this.router.navigate(['./login']);
  }


}
