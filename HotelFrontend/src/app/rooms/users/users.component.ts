import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any = [];
  userServiceSubscription!:Subscription;

  constructor(private router:Router, private userService:UserService) {
    this.userServiceSubscription = this.userService.getAllUsers().subscribe((data:any)=>{
      console.log(data);
      this.users=[...data.result];
    })
   }

  ngOnInit(): void {
  }

  addUser(){
    this.router.navigate(['/','rooms','add-user'])
  }

}
