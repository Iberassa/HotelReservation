import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetRoomsService } from '../get-rooms.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  addRoomForm!:FormGroup;
  formBuildSubscription!:Subscription;
  addRoomServiceSubscription!:Subscription

  constructor(private router:Router,private formBuilder:FormBuilder,private roomService:GetRoomsService) { 
    this.addRoomForm = this.formBuilder.group({
      'roomName':['',Validators.required],
      'roomStandard':['',Validators.required],
      'roomNumber':['',Validators.required],
      'numberOfGuests':['',Validators.required],
      'description':['',Validators.required],
      'price':['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.addRoomServiceSubscription= this.roomService.addNewRoom(this.addRoomForm.value).subscribe((data:any)=>{
      console.log(data);
    })
  }

}
