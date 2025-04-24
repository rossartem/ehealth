import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-right-icon',
  template: `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.3468 7.4375L7.3295 4.42025L8.12488 3.62488L12.5 8L8.12488 12.3751L7.3295 11.5798L10.3468 8.5625H3.5V7.4375H10.3468Z" fill="white"/>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-block;
      line-height: 0;
    }
  `]
})
export class ArrowRightIconComponent { }
