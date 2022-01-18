import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetRoomsService {
  private url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getRoomsForBooking(){
    return this.http.get(`${this.url}/rooms/openRooms`)
  }

  bookRoom(booked:any){
    return this.http.post(`${this.url}/book`,booked)
  }

  addNewRoom(room:any){
    return this.http.post(`${this.url}/admins/rooms/add`,room);
  }

}
