import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public web = 'https://v16.angular.io/docs';
  constructor(private router:Router){}

  onForm(){
    this.router.navigateByUrl('form');
  }
  onClick(){
    // window.location='https://v16.angular.io/docs';
  }
}
