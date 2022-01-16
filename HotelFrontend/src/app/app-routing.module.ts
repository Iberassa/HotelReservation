import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RoomDescriptionComponent } from './room-description/room-description.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:HomeComponent, children:[
      {path:'description/:room',component:RoomDescriptionComponent}
    ]},
    {path:'login',component:LoginComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
