import { Component } from '@angular/core';

@Component({
  selector: 'app-chevron-down-icon',
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10.879L13.7125 7.1665L14.773 8.227L10 13L5.22701 8.227L6.28751 7.1665L10 10.879Z" fill="#0A0D14"/>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-block;
      line-height: 0;
    }
  `]
})
export class ChevronDownIconComponent { }
