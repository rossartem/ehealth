import { Component } from '@angular/core';

@Component({
  selector: 'app-gov-icon',
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 16H17.5V17.5H2.5V16ZM4 10H5.5V15.25H4V10ZM7.75 10H9.25V15.25H7.75V10ZM10.75 10H12.25V15.25H10.75V10ZM14.5 10H16V15.25H14.5V10ZM2.5 6.25L10 2.5L17.5 6.25V9.25H2.5V6.25ZM10 7C10.1989 7 10.3897 6.92098 10.5303 6.78033C10.671 6.63968 10.75 6.44891 10.75 6.25C10.75 6.05109 10.671 5.86032 10.5303 5.71967C10.3897 5.57902 10.1989 5.5 10 5.5C9.80109 5.5 9.61032 5.57902 9.46967 5.71967C9.32902 5.86032 9.25 6.05109 9.25 6.25C9.25 6.44891 9.32902 6.63968 9.46967 6.78033C9.61032 6.92098 9.80109 7 10 7Z" fill="#525866"/>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-block;
      line-height: 0;
    }
  `]
})
export class GovIconComponent { }
