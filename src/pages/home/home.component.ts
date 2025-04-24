import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestartIconComponent } from 'src/shared/icons/restart-icon.component';
import { ChevronRightIconComponent } from '@shared/icons/chevron-right-icon.component';
import { ArrowRightIconComponent } from '@shared/icons/arrow-right-icon.componen';

@Component({
    selector: 'app-home',
    imports: [CommonModule, RestartIconComponent, ChevronRightIconComponent, ArrowRightIconComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    SERVICES = [
        {
            id: 1,
            name: 'Запись на консультацию с врачом',
            image: './assets/service-1.png',
            imageWidth: 89,
            imageHeight: 60,
        },
        {
            id: 2,
            name: 'Скачать документы и справки',
            image: './assets/service-2.png',
            imageWidth: 51,
            imageHeight: 72,
        },
        {
            id: 3,
            name: 'Подать композитную услугу',
            image: './assets/service-3.png',
            imageWidth: 73,
            imageHeight: 68,
        },
        {
            id: 4,
            name: 'Электронный паспорт здоровья',
            image: './assets/service-4.png',
            imageWidth: 77,
            imageHeight: 86,
        },
        {
            id: 5,
            name: 'Поиск ближайших клиник/больниц',
            image: './assets/service-5.png',
            imageWidth: 59,
            imageHeight: 76,
        },
        {
            id: 6,
            name: 'История обращений и записей',
            image: './assets/service-6.png',
            imageWidth: 70,
            imageHeight: 68,
        },
    ]

    PARTNERS = [
        {
            id: 1,
            name: 'Национальный центр экспертизы лекарственных средств и медицинских изделий',
            image: './assets/partner-1.png',
            imageWidth: 80,
            imageHeight: 80,
        },
        {
            id: 2,
            name: 'Национальный научный центр развития здравоохранения имени Салидат Каирбековой',
            image: './assets/partner-2.png',
            imageWidth: 106,
            imageHeight: 80,
        },
        {
            id: 3,
            name: 'РГП на ПХВ Республиканский центр электронного здравоохранения',
            image: './assets/partner-3.png',
            imageWidth: 65,
            imageHeight: 80,
        },
        {
            id: 4,
            name: 'Комитет медицинского и фармацевтического контроля Министерства здравоохранения Республики Казахстан',
            image: './assets/partner-4.png',
            imageWidth: 80,
            imageHeight: 80,
        }
    ]

    FUNCTIONS = [
        {
            id: 1,
            name: 'Для физических лиц',
            list: ['Запись к врачу', 'Электронная карта', 'Сертификаты и справки', 'Рецепты, больничные'],
            image: './assets/function-1.png',
        },
        {
            id: 2,
            name: 'Для бизнеса',
            list: ['Регистрация ЛС', 'Регистрация и цифровизация ЛС', 'Интеграция с ГРЗ'],
            image: './assets/function-2.png',
        },
        {
            id: 3,
            name: 'Для медорганизаций',
            list: ['Подключение к МИС', 'Обмен данными с РЦЭЗ', 'Управление статистикой и отчетностью'],
            image: './assets/function-3.png',
        },
        {
            id: 4,
            name: 'Для госорганов',
            list: ['Мониторинг запасов', 'Аналитика', 'Админ-доступ к справочникам'],
            image: './assets/function-4.png',
        }
    ]

    NEWS = [
        {
            id: 1,
            title: 'Открыта онлайн-запись к узким специалистам',
            description: 'Теперь пациенты могут записаться к кардиологу, эндокринологу и другим специалистам через портал.',
            chip: 'Цифровизация',
            date: '20 апреля 2025',
            image: './assets/news-1.png',
        },
        {
            id: 2,
            title: 'Запущена интеграция с МИС частных клиник',
            description: 'Медицинские данные из частных клиник теперь доступны в единой системе.',
            chip: 'Интеграция',
            date: '17 апреля 2025',
            image: './assets/news-2.png',
        },
        {
            id: 3,
            title: 'Появился электронный рецепт на льготные препараты',
            description: 'Получать и использовать рецепты стало удобнее — они доступны в личном кабинете.',
            chip: 'Электронные сервисы',
            date: '12 апреля 2025',
            image: './assets/news-3.png',
        },
        {
            id: 4,
            title: 'Стартовал обучающий курс для врачей по работе в e-Health',
            description: 'Курс поможет врачам быстрее освоить функционал новой платформы.',
            chip: 'Образование',
            date: '10 апреля 2025',
            image: './assets/news-4.png',
        },
        {
            id: 5,
            title: 'Обновлена система мониторинга лекарственных запасов',
            description: 'Новый интерфейс и расширенные функции для сотрудников госорганов.',
            chip: 'Госорганы',
            date: '5 апреля 2025',
            image: './assets/news-5.png',
        },
        {
            id: 6,
            title: 'Добавлен раздел “Моя вакцинация” в личном кабинете',
            description: 'Информация о прививках теперь всегда под рукой - в одном разделе.',
            chip: 'Профилактика',
            date: '2 апреля 2025',
            image: './assets/news-6.png',
        }
    ]
}
