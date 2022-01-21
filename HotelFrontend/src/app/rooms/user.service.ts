import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url ='http://localhost:3000'
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(`${this.url}/admin/auth/users`);
  }

  updateUser(user:any){
    return this.http.put(`${this.url}/admin/auth/update/${user._id}`,user);
  }

  addUser(user:any){
    return this.http.post(`${this.url}/admin/signup`,user);
  }

}
