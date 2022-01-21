import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetRoomsService } from '../get-rooms.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
  bookingSubscription!: Subscription;
  checkoutSubscription!: Subscription;
  activatedRouteSubscription!: Subscription;
  sendEmailSubscription!: Subscription;
  updateRoomSubscription!: Subscription;
  minDate = new Date();
  room!: any;
  bookedRoom: any = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private getRoomService: GetRoomsService,
    private activatedRouter: ActivatedRoute) {
    this.activatedRouteSubscription = this.activatedRouter.paramMap.subscribe((params: any) => {
      this.room = { ...this.router.getCurrentNavigation()?.extras.state };
    })
    this.bookingForm = this.formBuilder.group({
      'guestName': ['', Validators.required],
      'guestEmail': ['', [Validators.required, Validators.email]],
      'phone': ['', Validators.required],
      'dateIn': [, Validators.required],
      'dateOut': [, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/', 'rooms']);
  }



  reserve() {
    const updatedRoom = { ...this.room, booked: true };
    this.updateRoomSubscription = this.getRoomService.updateRoom(updatedRoom).subscribe((data: any) => {
      console.log(data);
    })
    const roomBooker = { fullname: this.bookingForm.value.guestName, email: this.bookingForm.value.guestEmail }
    this.sendEmailSubscription = this.getRoomService.sendEmail(roomBooker).subscribe((data: any) => {
      console.log(data);
    })

    this.checkoutSubscription = this.getRoomService.checkout(this.room._id).subscribe((data: any) => {
      window.location.href = data.url;
    })

    const bookedData = {
      roomNumber: this.room.roomNumber,
      roomId: this.room._id,
      guestEmail: roomBooker.email,
      guestName: roomBooker.fullname,
      dateIn: this.bookingForm.value.dateIn,
      dateOut: this.bookingForm.value.dateOut
    }

    this.bookingSubscription = this.getRoomService.bookRoom(bookedData).subscribe((data:any)=>{
      console.log(data);
    })





  }

  ngOnDestroy() {
    this.activatedRouteSubscription?.unsubscribe();
    this.checkoutSubscription?.unsubscribe();
    this.sendEmailSubscription?.unsubscribe();
    this.updateRoomSubscription?.unsubscribe();
  }
}
