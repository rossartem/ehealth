import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeIconComponent } from '@shared/icons/youtube-icon.component';
import { InstagramIconComponent } from '@shared/icons/instagram-icon.component';
import { XIconComponent } from '@shared/icons/x-icon.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, YoutubeIconComponent, InstagramIconComponent, XIconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  SERVICES = [
    {
      id: 1,
      name: 'Запись к врачу',
    },
    {
      id: 2,
      name: 'Скачать справки',
    },
    {
      id: 3,
      name: 'История обращений',
    },
    {
      id: 4,
      name: 'Для юридических лиц',
    },
  ]

  ABOUT = [
    {
      id: 1,
      name: 'О проекте',
    },
    {
      id: 2,
      name: 'Новости',
    },
    {
      id: 3,
      name: 'Обратная связь',
    },
    {
      id: 4,
      name: 'Контакты',
    },
  ]

  DOCUMENTS = [
    {
      id: 1,
      name: 'Политика конфиденциальности',
    },
    {
      id: 2,
      name: 'Пользовательское соглашение',
    },
    {
      id: 3,
      name: 'Условия использования',
    },
  ]
}
