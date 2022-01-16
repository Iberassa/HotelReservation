import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room-description',
  templateUrl: './room-description.component.html',
  styleUrls: ['./room-description.component.css']
})
export class RoomDescriptionComponent implements OnInit {
  data?:any;
  roomType?: any;
  routeSubscription!: Subscription;
  describeRoom = { capacity: "", price: "", pets: "", breakFast: "" }
  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.routeSubscription = this.activatedRouter.paramMap.subscribe((params: any) => {
      this.data = {...this.router.getCurrentNavigation()?.extras.state};
      this.roomType = this.data.type
      this.describeRoom = {...this.data.room};
    })
  }

  ngOnInit(): void {
  }

  goToRoom(){
    console.log("goto");
  }

}
