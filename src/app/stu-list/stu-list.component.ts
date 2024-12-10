import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serdemo1Service } from '../services/serdemo1.service';
import { Observable, take } from 'rxjs';


@Component({
  selector: 'app-stu-list',
  templateUrl: './stu-list.component.html',
  styleUrls: ['./stu-list.component.css']
})
export class StuListComponent {

  public data: any = [];
  public isDeleted: boolean = false;
  public errormsg: any;
  public test1 = { 'background-color':'' };
  public test2 = { 'background-color':'rgb(156 219 225 / 25%)'};
  public apiData: Observable<any> = new Observable();

  constructor(private router: Router, private dataser: Serdemo1Service,private activated:ActivatedRoute) {
    this.getapiData(); 
    
    
  }

  // observarbles event- next,err,complete and use setTimeOut and show error msg on html pages

  getapiData() {

    //Subscribe Data 

    // setTimeout(() => {
      // this.apiData = this.dataser.getDataFromAPI().pipe(take(4))
      // this.apiData = this.dataser.getDataFromAPI();

      // this.dataser.getDataFromAPI().subscribe(
      //   (res: any) => {
      //     console.log(res);
      //     this.data = res;
      //   },
      //   (err) => {
      //     console.log(err);
      //     this.errormsg = err.message;
      //   },
      //   () => {
      //     console.log('Data Get Successfully!');
      //   });
    // }, 500);


    // Get Data using async pipe

    this.data=this.dataser.getDataFromAPI();
    console.log(this.data);

  }


  onUpdate(dt: any) {

    // this.router.navigateByUrl('updateform/'+dt.id+'/'+dt.name+'/'+dt.email);
    this.router.navigateByUrl('updateform/' + dt.id);
    this.getapiData();
    

  }



  onDelete(id: number) {
    // console.log(id);
    // console.log('Async Await');

    var ab = confirm('Are You Sure to Delete Data?');
    if (ab) {

      //Async Await 
      this.dataser.deleteData(id)
        .then((res) => {
          console.log(res);
          alert('Data Delete Successful');
          // use to refresh the table after delete data
          this.getapiData();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log('Function call Using Async Await Successfully!');
        })

      // Subscribe the observable data
      // this.dataser.deleteData(id).subscribe(
      //   (res: any) => {
      //     console.log(res);
      //     alert('Data Delete Successful');
      //   },
      //   (err: any) => {
      //     console.log(err);
      //   },
      //   ()=>{
      //     console.log('Delete Data Successfully!');
      //   }
      // )

    

    }
  }

  onClick(){
    // routing
    this.router.navigateByUrl('xemp');
  }
}
