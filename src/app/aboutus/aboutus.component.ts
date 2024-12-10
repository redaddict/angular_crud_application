import { Component } from '@angular/core';
import { Serdemo1Service } from '../services/serdemo1.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  public userData: any;
  public promiseData: any;
  public errormsg:any;
  public today = new Date();
  public salary = 4.50000;


  constructor(private dataser: Serdemo1Service) {

    // this.dataser.getUserDataFromApi().subscribe((res:any)=>{
    //   this.userData = res.data;
    //   console.log(res)
    // })

    this.getUserDataUsingPromises();
  }


  //Get user data using setTimeOut and Promises

  getUserDataUsingPromises() {
    console.log('Function Calling...')
    
    setTimeout(() => {
      this.dataser.getUserDataPromises()
        .then((res: any) => {
          console.log(res.data);
          this.userData = res.data;
        })
        .catch((err: any) => {
          console.log(err);
          this.errormsg=err.message;
        })
        .finally(() => {
          console.log("This function completely run using Promises");
        })
    }, 1200);






  }
}
