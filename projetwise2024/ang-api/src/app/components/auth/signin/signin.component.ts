import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

globalInfo : string='Authentification';
isDisabled : boolean=false;
  constructor() { }
  eventTemplateStatement(event : any){
    console.log("click eventTest",event.target.inner);
  }
  ngOnInit(): void {
    
  }

}
