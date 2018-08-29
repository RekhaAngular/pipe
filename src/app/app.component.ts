import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
   listValue = [ {
  					'city':'chennai',
  					'name':'shankar'
  				},{
  					'city':'mumbai',
  					'name':'rahul'
  				},{
  					'city':'nasik',
  					'name':'mohan'
  				},{
  					'city':'chennai',
  					'name':'mohan'
  				},{
  					'city':'chennai',
  					'name':'praveen'
  				},{
  					'city':'pune',
  					'name':'Rakha'
  				},{
  					'city':'Rajkot',
  					'name':'Sudhir'
  				},{
  					'city':'kolkata',
  					'name':'manoj'
  				},{
  					'city':'chennai',
  					'name':'shiva'
  				}]

}
