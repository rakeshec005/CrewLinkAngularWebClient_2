'use strict';
import { Component} from '@angular/core';
import { headerComponent} from '../app/header/header.component';
import { footerComponent} from '../app/footer/footer.component';



@Component({
  selector: 'app-root',
  templateUrl:"app.component.html",
  styleUrls: ['app.component.css'],
  
  
 
})
export class AppComponent {
  
  public title: string="hello app works !!!!" 
  
}
