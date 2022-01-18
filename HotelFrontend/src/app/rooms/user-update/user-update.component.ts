import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: any = {};
  userUpdateForm!: FormGroup;
  routeSubscription!: Subscription;
  submitSubscription!: Subscription;
  workerRole=['admin','worker'];
  userActive=true;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private formBuilder: FormBuilder,
    private userService: UserService) {
    this.routeSubscription = this.activatedRouter.paramMap.subscribe((params: any) => {
      this.user = { ...this.router.getCurrentNavigation()?.extras.state };
    })
    this.userUpdateForm = this.formBuilder.group({
      'fullname': [this.user.fullname, Validators.required],
      'email': [this.user.email, [Validators.required, Validators.email]],
      'phone': [this.user.phone, Validators.required],
      'role': [this.user.role, Validators.required],
      'active': [this.user.active, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submitUpdate() {
    this.submitSubscription = this.userService.updateUser(this.userUpdateForm.value).subscribe((data:any)=>{
      console.log(data);
    })
  }

  userList(){
    this.router.navigate(['/','rooms','users'])
  }

}
