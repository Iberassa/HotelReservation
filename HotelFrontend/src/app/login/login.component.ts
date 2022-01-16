import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  loginSubscriptions?:Subscription;
  passwordHide:Boolean = true;

  constructor(private formBuilder:FormBuilder, private router:Router) { 
    this.loginForm = this.formBuilder.group({
      'email':['',[Validators.required,Validators.email]],
      'password':['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit(){
    console.log("Submitted")
  }

  returnHome(){
    this.router.navigate(['/']);
  }


}
