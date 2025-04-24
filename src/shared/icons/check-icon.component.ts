import { Component } from '@angular/core';

@Component({
  selector: 'app-check-icon',
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.49999 12.379L15.394 5.48425L16.4552 6.54475L8.49999 14.5L3.72699 9.727L4.78749 8.6665L8.49999 12.379Z" fill="#525866"/>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-block;
      line-height: 0;
    }
  `]
})
export class CheckIconComponent { }
