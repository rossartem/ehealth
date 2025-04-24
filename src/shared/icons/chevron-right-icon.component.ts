import { Component } from '@angular/core';

@Component({
  selector: 'app-chevron-right-icon',
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.7958 9.99932L7.08331 6.28682L8.14381 5.22632L12.9168 9.99932L8.14381 14.7723L7.08331 13.7118L10.7958 9.99932Z" fill="#4D42E9"/>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-block;
      line-height: 0;
    }
  `]
})
export class ChevronRightIconComponent { }
