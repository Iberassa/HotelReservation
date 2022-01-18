import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  userAddForm!:FormGroup;
  userAddSubscription!:Subscription;
  userAddServiceSubscription!:Subscription;
  workerRole=['admin','worker'];
  userActive=true;

  constructor(private router:Router,private userService:UserService, private formBuilder:FormBuilder) {
    this.userAddForm = this.formBuilder.group({
      'fullname':['',Validators.required],
      'email':['',[Validators.required,Validators.email]],
      'password':['',Validators.required],
      'phone':['',Validators.required],
      'role':['',Validators.required],
      'active':['',Validators.required]
    })
   }

  ngOnInit(): void {
  }

  submitUser(){
    this.userAddServiceSubscription = this.userService.addUser(this.userAddForm.value).subscribe((data)=>{
      console.log(data);
    })
  }

  userList(){
    this.router.navigate(['/','rooms','users']);
  }

}
