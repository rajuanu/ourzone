import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  element!:number
 
   
  typesOfShoes = ['employ compensation policy','Business Details','workers Details','exclusion','condition'
]

NewBusiness: string[] = [
  "Card Type",
"Net Banking",
"UPI"]
     


  constructor() {
    // this.element=1;
   }

  ngOnInit(): void {

    
  }
  click(id:number){
    console.log(id)
    this.element= id

  }

}
