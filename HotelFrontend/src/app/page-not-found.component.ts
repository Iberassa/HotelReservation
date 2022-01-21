import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="mat-display-4">
     404! Page not found!
    </div>
  `,
  styles: [`
  div{
    color:red;
  }
  `]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
