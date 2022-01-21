import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  hideLoginButton: Boolean = false;
  hideLogoutButton:Boolean = true;
  constructor(private router: Router) { }


  ngOnInit() {
    if(localStorage.getItem("token")){
      this.hideLogoutButton = false;
      this.hideLoginButton = true;
    }else{
      this.hideLoginButton = false;
      this.hideLogoutButton=true;
    }
  }

  ngOnChanges(){
    this.hideLogoutButton = false;
  }

  login() {
    if (!this.hideLoginButton) {
      this.hideLoginButton = !this.hideLoginButton
      this.hideLogoutButton =!this.hideLoginButton
    }
    this.router.navigate(['/', 'login']);
  }

  logout(){
    localStorage.removeItem("token");
    this.hideLoginButton =false;
    this.hideLogoutButton=true;
    this.router.navigate(['/']);
  }

  home() {
    if (this.hideLoginButton && !localStorage.getItem("token")) {
      this.hideLoginButton = !this.hideLoginButton;
      this.hideLogoutButton = !this.hideLogoutButton;
    }
    this.router.navigate(['/'])
  }

ngOnDestroy(){
  localStorage.removeItem("token");
}  


}
