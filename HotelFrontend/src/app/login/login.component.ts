import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  stateSubscription!:Subscription;
  loginSubscriptions?:Subscription;
  errorHide=true;
min=new Date()
  constructor(private formBuilder:FormBuilder, private router:Router, private loginService:LoginService) { 
    this.loginForm = this.formBuilder.group({
      'email':['',[Validators.required,Validators.email]],
      'password':['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit(){
     this.loginSubscriptions = this.loginService.login(this.loginForm.value).subscribe((data:any)=>{
      if(!data.Success){
        this.errorHide = !this.errorHide;
      }else{

        localStorage.setItem('token',`Berear ${data.token}`);
        this.router.navigate(['/'])
      }
    })
  }

  returnHome(){
    this.router.navigate(['/']);
  }


  ngOnDestroy(){
    this.loginSubscriptions?.unsubscribe();
  }


}
