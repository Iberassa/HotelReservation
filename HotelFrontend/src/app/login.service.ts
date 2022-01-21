import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private url = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post(`${this.url}/admin/login`,user);
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

}
