import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetRoomsService } from '../get-rooms.service';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.css']
})
export class AllRoomsComponent implements OnInit {
  rooms:any = [];
  serviceSubscription!: Subscription;
  showFullRoom = true;
  adminShow = true;
  adminUser = true;

  constructor(private getRoomService: GetRoomsService, private router: Router) {
    this.serviceSubscription = this.getRoomService.getRoomsForBooking().subscribe((data: any) => {
      if(!data.result){
        console.log(data)
        this.showFullRoom = !this.showFullRoom;
      }
      this.rooms = [...data.result];
    })
  }

  ngOnInit(): void {
    console.log(this.rooms);
    const token = localStorage.getItem('token');
    if(token){
      this.adminShow = !this.adminShow;
    }
  }

  addRoomForm(){
    this.router.navigate(['/','rooms','add-room'])
  }

  showAdminUser(){
    this.router.navigate(['/','rooms','users'])
  }

}
