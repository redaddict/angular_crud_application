import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Serdemo1Service } from '../services/serdemo1.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public array: any = [];
  public isTrue:boolean=false;


  constructor(private router: Router, private serv: Serdemo1Service) { }

  onSubmit(dt: any) {
    if (dt.valid){
      console.log(dt.value);
      // send to url
      this.serv.postAPIData(dt.value).subscribe(
        (res: any) => {
          console.log(res);
          // this.isTrue=true;
          alert('Form submitted successfully!');
          this.router.navigateByUrl('stulist');
          dt.reset();
          
        });
    }
    else {

      alert('Please fill in all required fields.');
    }
  }

  



}





