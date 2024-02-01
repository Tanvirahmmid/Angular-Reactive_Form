import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-form';

  reactiveFrom: FormGroup;
  ngOnInit(){
    this.reactiveFrom= new FormGroup ({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null,Validators.required ),  
      email: new FormControl(null,[Validators.required,Validators.email]), 
      password: new FormControl(null, Validators.required),
      dateOfbirt: new FormControl(null, Validators.required), 
      gender: new FormControl('male', Validators.required),
      
      address: new FormGroup({
        city: new FormControl(null,Validators.required), 
        posCode: new FormControl(null,Validators.required),
        street: new FormControl(null,Validators.required),

      }) 

     

    })

      
  }
  OnFromSubmit(){
    console.log(this.reactiveFrom);
  }
  
}


