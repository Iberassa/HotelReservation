import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room:any;
  adminsButtons = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
    const token =  localStorage.getItem("token");
    if(token){
      this.adminsButtons = !this.adminsButtons
    }
  }

  bookForm(){
    this.router.navigate(['/','rooms','booking'])
  }

  releaveRoom(){}

  closeRoom(){}

}
