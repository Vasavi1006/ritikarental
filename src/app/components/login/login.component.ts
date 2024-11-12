import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

loginFrom:FormGroup=new FormGroup({});
  reqpwd: any;
constructor(private router:Router,private fb:FormBuilder){ 
  this.loginFrom=this.fb.group({
username:['',Validators.required],
password:['',Validators.required]
  });
}
checkLogin(){
  this.reqpwd=this.loginFrom.value.username.slice(0,3)+"123";
   if(this.loginFrom.value.username=="admin" && this.loginFrom.value.password=="admin123"){
    alert("admin login successful");
    this.router.navigateByUrl("/admin/cars");
   
  }
  else if(this.loginFrom.value.password==this.reqpwd){
    alert("user login successful");
  this.router.navigateByUrl("/user/cars");
}
}}