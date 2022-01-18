import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetRoomsService } from '../get-rooms.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  bookingForm!:FormGroup;
  bookingSubscription!:Subscription;
  minDate = new Date();

  constructor(private formBuilder:FormBuilder,private router:Router,private getRoomService:GetRoomsService) {
    this.bookingForm = this.formBuilder.group({
      'fullname':['',Validators.required],
      'email':['',[Validators.required,Validators.email]],
      'phone':['',Validators.required],
      'from':[,Validators.required],
      'to':[,Validators.required]
    })
   }

  ngOnInit(): void {
  }


  dateFilter(date:any){
    const day = date.getDay()
    return day!==0
  }

  reserve(){
    console.log(this.bookingForm.value);
  }
}
