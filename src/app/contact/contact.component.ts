import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Serdemo1Service } from '../services/serdemo1.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public contactForm:any; 
  public isTrue:boolean=false;

  constructor(private fb:FormBuilder,private dataService:Serdemo1Service){
    this.contactForm = this.fb.group({
      id:[''],
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      subject:['',[Validators.required]],
      comments:['',[Validators.required]],

    })
  }

  get f(){
    return this.contactForm.controls;
  }


  onContact(){
    if(this.contactForm.valid){
      // send/post to url
      this.dataService.postContactAPI(this.contactForm.value).subscribe((res:any)=>
      {
        console.log(res);
      })
      alert('form submitted');
      this.contactForm.reset();
      this.isTrue=true;
    }else{
      alert('Form is invalid, Please fill the all details');
    }
  }
}
