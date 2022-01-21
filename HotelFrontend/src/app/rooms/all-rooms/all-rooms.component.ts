import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetRoomsService } from '../get-rooms.service';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.css']
})
export class AllRoomsComponent implements OnInit {
  p = 1;
  rooms: any = [];
  searchFormGroup!:FormGroup;
  searchSubscription!:Subscription;
  serviceSubscription!: Subscription;
  showFullRoom = true;
  adminShow: Boolean = true;
  adminUser = true;


  constructor(private getRoomService: GetRoomsService, private router: Router,private formBuilder:FormBuilder) {
    this.searchFormGroup = this.formBuilder.group({
      'search':['']
    })
    this.serviceSubscription = this.getRoomService.getRoomsForBooking().subscribe((data: any) => {
      if (!data.result) {
        this.showFullRoom = !this.showFullRoom;
      }
      this.rooms = [...data.result];
    })
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.adminShow = !this.adminShow;
    }
  }

  back(){
    this.router.navigate(['/']);
  }


  addRoomForm() {
    this.router.navigate(['/', 'rooms', 'add-room'])
  }

  showAdminUser() {
    this.router.navigate(['/', 'rooms', 'users'])
  }

  ngOnDestroy(){
    this.serviceSubscription?.unsubscribe();
  }

}
