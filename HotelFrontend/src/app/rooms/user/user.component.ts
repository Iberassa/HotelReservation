import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  updateUser(){
    this.router.navigate(['/','rooms','users',`${this.user._id}`,'update'],{state:this.user})
  }

}
