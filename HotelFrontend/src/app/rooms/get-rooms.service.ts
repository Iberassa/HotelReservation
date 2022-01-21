import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetRoomsService {
  private url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getRoomsForBooking(){
    const token = localStorage.getItem("token");
    if(token){
      return this.http.get(`${this.url}/rooms/all`);
    }else {
      return this.http.get(`${this.url}/rooms`);
    }
  }

  getRoomBookingRoomId(roomId:any){
    return this.http.get(`${this.url}/booking${roomId}`)
  }

  bookRoom(booked:any){
    return this.http.post(`${this.url}/booking/book`,booked)
  }

  sendEmail(booker:any){
    return this.http.post(`${this.url}/booking/send-email`,booker)
  }

  addNewRoom(room:any){
    return this.http.post(`${this.url}/admin/auth/add`,room);
  }

  checkout(roomId:any){
    const id ={id:roomId}
    return this.http.post(`${this.url}/booking/create-checkout-session`,id);
  }

  updateRoom(room:any){
    return this.http.put(`${this.url}/rooms/update/${room._id}`,room);
  }

}
