import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Serdemo1Service } from '../services/serdemo1.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {
  public updateform: any;
  public id: any;
  public storeDate: any;

  constructor(
    private fb: FormBuilder,
    private activated: ActivatedRoute,
    private dataser: Serdemo1Service,
    private route: Router) {

    this.updateform = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]]
    })

    //paramsMap

    console.log(this.activated.paramMap);
    this.activated.paramMap.subscribe((res: any) => {
      console.log(res.params);

      this.id = res.params.id;
      // this.updateform.setValue({
      //   ...res.params
      //   // id: res.params['id'] || '',
      //   // name: res.params['name'] || '',
      //   // email: res.params['email'] || '',
      // });

    })

    this.dataser.getDataFromAPI().subscribe((res: any) => {
      console.log(res)
      this.storeDate = res.filter((i: any) => i.id == this.id)[0];
      //setValues
      this.updateform.setValue(this.storeDate)
    })

  }


  get f() {
    return this.updateform.controls;
  }


  onUpdate() {

    console.log(this.updateform.value)
    if (this.updateform.valid) {
      var ab = confirm('are you sure to update data?');
      if (ab) {
        this.dataser.putdata(this.updateform.value).subscribe((res: any) => {
          console.log(res);
          // alert('Data Update Successfully!');


        })
        // routing
        this.route.navigateByUrl('stulist');
        //get method
        this.dataser.getDataFromAPI().subscribe((res: any) => {
          console.log(res);
          // this.updateform = res
        })
      }

      else {
        this.route.navigateByUrl('stulist')
      }
    }
    else {
      alert('Form Data is Empty')
    }
  }
}
