import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  hideLoginButton: Boolean = false;
  constructor(private router: Router) { }


  ngOnInit() {
    
  }

  login() {
    if (!this.hideLoginButton) {
      this.hideLoginButton = !this.hideLoginButton
    }
    this.router.navigate(['/', 'login']);
  }
  home() {
    if (this.hideLoginButton) {
      this.hideLoginButton = !this.hideLoginButton;
    }
    this.router.navigate(['/'])
  }
}
