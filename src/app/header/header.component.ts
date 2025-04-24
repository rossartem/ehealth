import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { GovIconComponent } from '@shared/icons/gov-icon.component';
import { LegalIconComponent } from '@shared/icons/legal-icon.component';
import { PhysicalIconComponent } from '@shared/icons/physical-icon.component';
import { SearchIconComponent } from '@shared/icons/search-icon.component';
import { GlassesIconComponent } from '@shared/icons/glasses-icon.component';
import { UserIconComponent } from '@shared/icons/user-icon.component';
import { CheckIconComponent } from '@shared/icons/check-icon.component';
import { ChevronDownIconComponent } from '@shared/icons/chevron-down-icon.component';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    GovIconComponent,
    LegalIconComponent,
    PhysicalIconComponent,
    SearchIconComponent,
    GlassesIconComponent,
    UserIconComponent,
    CheckIconComponent,
    ChevronDownIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  USER_TYPES = [
    {
      id: 1,
      name: 'Физическим лицам',
    },
    {
      id: 2,
      name: 'Юридическим лицам',
    },
    {
      id: 3,
      name: 'Государственным органам',
    }
  ]

  LANGUAGES = [
    {
      id: 1,
      name: 'Русский',
      abbr: 'RU',
    },
    {
      id: 2,
      name: 'Казахский',
      abbr: 'KZ',
    }
  ]

  selectedUserType = this.USER_TYPES[0];
  selectedLanguage = this.LANGUAGES[0];
}