import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  private url = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post(`${this.url}/login`,user);
  }

}
