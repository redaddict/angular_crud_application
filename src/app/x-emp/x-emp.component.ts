import { Component } from '@angular/core';
import { Serdemo1Service } from '../services/serdemo1.service';
import { Router } from '@angular/router';
import { filter, skip, take, pipe, from, pluck, first } from 'rxjs';

@Component({
  selector: 'app-x-emp',
  templateUrl: './x-emp.component.html',
  styleUrls: ['./x-emp.component.css']
})
export class XEmpComponent {

  public userdata: any[] = [];
  public errormsg: any;
  public takeop: any;


  public test1 = { 'background-color': '#fff9d9' };
  public test2 = { 'background-color': ' rgb(233 233 233)' };

  constructor(private router: Router, private dataser: Serdemo1Service) {
    this.getDataoFUser();

    // this.getAllPromises();
  }

  getDataoFUser() {
    // async pipe
    // this.userdata = this.dataser.getXEmpDataFromAPI();
    // console.log(this.userdata);

    // rxjs op.

    this.dataser.getXEmpDataFromAPI().subscribe((res: any) => {
      console.log(res.data);
      // this.userdata = res.data;
      const xemp = res.data;

      console.log('rsjx ...', xemp);

      // take
      // from(xemp).pipe(take(3)).subscribe((emp) => {
      //   console.log(emp);
      //   this.userdata.push(emp);
      // });

      // skip
      from(xemp).pipe(skip(2)).subscribe((emp) => {
        console.log(emp);
        this.userdata.push(emp);
      });

      // pluck - error 
      // from(xemp).pipe(pluck('first_name')).subscribe((emp) => {
      //   console.log(emp);
      //   this.userdata.push(emp);
      // });

      // 
      console.log(this.userdata);
    })


    // settimeout

    // setTimeout(() => {

    //   this.takeop = this.dataser.getXEmpDataFromAPI();
    //   this.takeop.subscribe(
    //     (res: any) => {
    //       console.log(res);
    //       this.userdata = res.data;
    //     },
    //     (err:any) => {
    //       console.log(err);
    //     },
    //     () => {
    //       console.log('Data Get Successfully!');
    //     });
    // }, 500);
  }



  // promise.all

  
  // getAllPromises(){
  //   Promise.all([
  //     this.dataser.getXuser(),
  //     this.dataser.getCurruser()
  //   ])
  //   .then(([xuser,curruser])=>{
  //     console.log(xuser);
  //     console.log(curruser);
  //     this.userdata = xuser,curruser;
  //   })
  //   .catch((err)=>{
  //         console.log(err);
  //       })
  //       .finally(()=>{
  //         console.log('Combine the multiple promises together completed successfully with API data')
  //       })
  // }

  onBack() {
    this.router.navigateByUrl('stulist');
  }
}
