import {NgxPaginationModule} from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';


import { RoomComponent } from './room/room.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserAddComponent } from './user-add/user-add.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorsService } from '../http-interceptors.service';
import { GetRoomsService } from './get-rooms.service';
import { UserService } from './user.service';
import { FilterPipe } from './filter.pipe';
import { FilterUserPipe } from './filter-user.pipe';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AllRoomsComponent,
    RoomComponent,
    BookingFormComponent,
    AddRoomComponent,
    UsersComponent,
    UserComponent,
    UserUpdateComponent,
    UserAddComponent,
    FilterPipe,
    FilterUserPipe
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      {path:'',component:AllRoomsComponent},
      {path:'booking',component:BookingFormComponent },
      {path:'add-room',component:AddRoomComponent,canActivate:[AuthGuard]},
      {path:'users',component:UsersComponent,canActivate:[AuthGuard]},
      {path:'users/add-user',component:UserAddComponent,canActivate:[AuthGuard]},
      {path:'users/:id/update',component:UserUpdateComponent,canActivate:[AuthGuard]}
    ])
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptorsService,multi:true},AuthGuard,
    GetRoomsService,UserService
  ]
})
export class RoomsModule { }
