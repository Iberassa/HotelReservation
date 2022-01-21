import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-failed',
  template: `
    <div class="mat-display-3">
  Payment Failed!
    </div>
  `,
  styles: [`
  div{
    text-align:center;
    color:red;
    padding-top:20%;
  }
  `]
})
export class PaymentFailedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
