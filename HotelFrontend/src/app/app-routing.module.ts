import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { RoomDescriptionComponent } from './room-description/room-description.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'',component:HomeComponent, children:[
      {path:'description/:room',component:RoomDescriptionComponent}
    ]},
    {path:'login',component:LoginComponent},
    {path:'rooms',loadChildren:()=>import('./rooms/rooms.module').then(m=>m.RoomsModule)},
    {path:'payment-successful',component:PaymentSuccessComponent},
    {path:'payment-failed',component:PaymentFailedComponent},
    {path:'**',component:PageNotFoundComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
