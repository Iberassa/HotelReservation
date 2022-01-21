import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-success',
  template: `
  <div class="mat-display-3">
  Payment Successful!
    </div>
  `,
  styles: [`
  div{
    text-align:center;
    color:green;
    padding-top:20%;
  }

  `]
})
export class PaymentSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
