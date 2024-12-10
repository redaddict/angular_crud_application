import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustDirc]'
})
export class CustDircDirective {

  constructor(private ele: ElementRef) { 
    console.log(this.ele);
    
    this.ele.nativeElement.style.boxShadow ='#101010 3px 2px 4px 0px';
    
    
    
      
  }


}
