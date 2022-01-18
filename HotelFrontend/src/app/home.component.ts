import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  singleRoom = { capacity: "2 people", price: "$300", pets: "Allowed", breakFast: "Included" };
  doubleBed = { capacity: "2 people", price: "$400", pets: "Allowed", breakFast: "Included" };
  familyRoom = { capacity: "6 people", price: "$550", pets: "Allowed", breakFast: "Included" };
  sweet = { capacity: "2 people", price: "$1000", pets: "Allowed", breakFast: "Included" };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  description(roomType:any){
    if(roomType==="Single"){
      this.router.navigate(['/','description',roomType],{state:{type:roomType,room:this.singleRoom}})
    }else if(roomType==="Double"){
      this.router.navigate(['/','description',roomType],{state:{type:roomType,room:this.doubleBed}})
    }else if(roomType==="Family"){
      this.router.navigate(['/','description',roomType],{state:{type:roomType,room:this.familyRoom}})
    }else if(roomType==="Sweet"){
      this.router.navigate(['/','description',roomType],{state:{type:roomType,room:this.sweet}})
    }
  }

  goToRoom(){
    this.router.navigate(['/','rooms'])
  }

}
