import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RoomDescriptionComponent } from './room-description/room-description.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { HttpInterceptorsService } from './http-interceptors.service';
import { LoginService } from './login.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RoomDescriptionComponent,
    PaymentSuccessComponent,
    PaymentFailedComponent,
    PageNotFoundComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorsService, multi: true },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
