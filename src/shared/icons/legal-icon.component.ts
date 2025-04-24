import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-icon',
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.75 16H18.25V17.5H1.75V16H3.25V3.25C3.25 3.05109 3.32902 2.86032 3.46967 2.71967C3.61032 2.57902 3.80109 2.5 4 2.5H16C16.1989 2.5 16.3897 2.57902 16.5303 2.71967C16.671 2.86032 16.75 3.05109 16.75 3.25V16ZM15.25 16V4H4.75V16H15.25ZM7 9.25H9.25V10.75H7V9.25ZM7 6.25H9.25V7.75H7V6.25ZM7 12.25H9.25V13.75H7V12.25ZM10.75 12.25H13V13.75H10.75V12.25ZM10.75 9.25H13V10.75H10.75V9.25ZM10.75 6.25H13V7.75H10.75V6.25Z" fill="#525866"/>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-block;
      line-height: 0;
    }
  `]
})
export class LegalIconComponent { }
