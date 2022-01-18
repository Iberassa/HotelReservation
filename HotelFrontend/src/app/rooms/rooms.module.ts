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



@NgModule({
  declarations: [
    AllRoomsComponent,
    RoomComponent,
    BookingFormComponent,
    AddRoomComponent,
    UsersComponent,
    UserComponent,
    UserUpdateComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([
      {path:'',component:AllRoomsComponent},
      {path:'booking',component:BookingFormComponent },
      {path:'add-room',component:AddRoomComponent},
      {path:'users',component:UsersComponent},
      {path:'users/:id/update',component:UserUpdateComponent}
    ])
  ]
})
export class RoomsModule { }
