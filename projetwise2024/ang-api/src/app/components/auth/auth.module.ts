import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
