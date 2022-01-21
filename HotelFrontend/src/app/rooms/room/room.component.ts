import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetRoomsService } from '../get-rooms.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room: any;
  adminsButtons = true;
  releaveRoomSubscription!: Subscription;
  closeRoomSubscription!: Subscription;
  bookedRooms=true;

  constructor(private router: Router, private getRoomService: GetRoomsService) { }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    if (token) {
      this.adminsButtons = !this.adminsButtons;
      this.bookedRooms = false;
    }else{
      this.bookedRooms= this.room.booked;
    }
  }


  bookForm() {
    this.router.navigate(['/', 'rooms', 'booking'], { state: this.room })
  }

  releaveRoom() {
    const updatedRoom = { ...this.room, booked: !this.room.booked }
    this.releaveRoomSubscription = this.getRoomService.updateRoom(updatedRoom).subscribe((data: any) => {
      if (data.Success) {
        this.room = { ...updatedRoom }
      }
    })
  }

  closeRoom() {
    const updatedRoom = { ...this.room, booked: !this.room.booked }
    this.closeRoomSubscription = this.getRoomService.updateRoom(updatedRoom).subscribe((data: any) => {
      if (data.Success) {
        this.room = { ...updatedRoom }
      }
    })
  }

  ngOnDestroy(){
    this.closeRoomSubscription?.unsubscribe();
    this.releaveRoomSubscription?.unsubscribe();
  }

}
