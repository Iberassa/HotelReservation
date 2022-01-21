import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  p=1;
  users:any = [];
  userServiceSubscription!:Subscription;
  searchFormGroup!:FormGroup

  constructor(private router:Router, private userService:UserService,private formBuilder:FormBuilder) {
    this.searchFormGroup = this.formBuilder.group({
      'search':['']
    })
    this.userServiceSubscription = this.userService.getAllUsers().subscribe((data:any)=>{
      this.users=[...data.result];
    })
   }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/','rooms']);
  }


  addUser(){
    this.router.navigate(['/','rooms','users','add-user'])
  }

}
