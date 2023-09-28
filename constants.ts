export const navlinks: {
    title: string;
    links?: { title: string; href: string }[];
}[] = [
    {
        title: "Центр",
        links: [
            { title: "О центре", href: "/center/about_the_center" },
            { title: "Документы", href: "/center/documentation" },
            { title: "Проекты", href: "/center/project" },
            { title: "Контакты", href: "/center/contacts" },
        ],
    },
    {
        title: "Студентам",
        links: [
            { title: "Услуги", href: "/for_students/services" },
            //     { title: "Тренинги", href: "/for_students/trainings" },
            //     { title: "Истории успеха", href: "/for_students/success_stories" },
            //     { title: "Кейсы", href: "/for_students/cases" },
        ],
    },
    {
        title: "НКО",
        links: [
            { title: "Обучение служением", href: "/nko/service_learning" },
            { title: "Партнеры", href: "/nko/partner" },
        ],
    },
    {
        title: "Инфотека",
        links: [
            { title: "Инфографика", href: "/infoteka/infographics" },
            { title: "Чек-листы", href: "/infoteka/checklists" },
            {
                title: "Доклады о развитии гражданского общества",
                href: "/infoteka/civil_society_development_reports",
            },
        ],
    },
    {
        title: "Календарь",
        // links: [
        //     { title: "Студентам", href: "/for_students" },
        // { title: "Нко", href: "/nko" },
        // ],
    },
];

export const documentation_page_items: {
    title: string;
    links: { title: string; href: string }[];
}[] = [
    {
        title: "УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ ЦЕНТРА",
        links: [
            {
                title: "Устав центра",
                href: "1MaR5nQrh4ax9ED9OFf1RKqvHeP4rEtly",
            },
            {
                title: "Свидетельство о постановке на учет юридического лица в налоговом органе",
                href: "1T4z9Ob6EhqXGKMxa2Ae1UNPpmttSjHVc",
            },
            {
                title: "Свидетельство о внесении записи в Единый государственный реестр (ОГРН)",
                href: "_",
            },
            {
                title: "Свидетельство о государственной регистрации некоммерческой организации",
                href: "13uRKE6_Z3NZkF3YNOhnt5PDLYKsNWTkn",
            },
        ],
    },
    {
        title: "ГОДОВЫЕ ПУБЛИЧНЫЕ ОТЧЕТЫ ЦЕНТРА",
        links: [
            {
                title: "Отчет центра за 2022 год",
                href: "18GKczsWUqOg5AAMyfRlD8XmvBDw3wc3q",
            },
            {
                title: "Отчет центра за 2021 год",
                href: "1ecyPVFzLKUSZOBAyny7_Qq8Qazr_5mQr",
            },
            {
                title: "Отчет центра за 2020 год",
                href: "1-oypFHyyyo_HftKO1cKMAvIi0VNNLF88",
            },
        ],
    },
];

export const about_the_center_page_items: {
    icons: {
        picture: string;
        text: string;
    }[];
    team: {
        picture: string;
        name: string;
        job_title: string;
        achievements: string;
    }[];
} = {
    icons: [
        {
            picture:
                "/center/about_the_center/icons/directions_of_work_of_the_center_1.png",
            text: "Содействие в формировании и развитии молодежных общественных объединений",
        },
        {
            picture:
                "/center/about_the_center/icons/directions_of_work_of_the_center_2.png",
            text: "Организация и проведение мероприятий, направленных на развитие гражданской активности молодежи, вовлечение молодежи в проектную и социальную деятельность",
        },
        {
            picture:
                "/center/about_the_center/icons/directions_of_work_of_the_center_3.png",
            text: "Распространение информации полезной для успешной деятельности некоммерческих организаций и поддержки социальных инициатив молодёжи",
        },
        {
            picture:
                "/center/about_the_center/icons/directions_of_work_of_the_center_4.png",
            text: "Разработка и изготовление методических материалов в сфере социального проектирования",
        },
    ],
    team: [
        {
            picture: "/center/about_the_center/people/yakunicheva_olga.png",
            name: "Якуничева Ольга",
            job_title: "Директор",
            achievements:
                "Тренер по социальному проектированию, эксперт Росмолодёжь. Гранты, конкурса «Моя страна – моя Россия», областного конкурса молодежных проектов",
        },
        {
            picture: "/center/about_the_center/people/ozhogin_michail.png",
            name: "Ожогин Михаил",
            job_title: "Менеджер",
            achievements:
                "Тренер по социальному проектированию, эксперт конкурса «Моя страна – моя Россия», областных конкурсов инициатив членов детских и молодежных общественных объединений",
        },
    ],
};

export const infographics: {
    pictureGoogleId: string;
    fileName: string;
}[] = [
    {
        pictureGoogleId: "1IqwniAi8t-z_hAly2zbywpdcZz5O9Ok6",
        fileName: "Целевая группа",
    },
    {
        pictureGoogleId: "1qnL4teG9Qmv-t-oYYCaNaaYWb6-ei9rC",
        fileName: "Социальная проблема",
    },
    {
        pictureGoogleId: "1FHnuLr6uWM2j9W1t-OFOMQ0QftH73fUH",
        fileName: "Результат проекта",
    },
    {
        pictureGoogleId: "11othIhhtFzeWX1o2SQXBdGrqiqUvxMq8",
        fileName: "Цель социального проекта",
    },
];

export const checklists: {
    fileName: string;
    fileGoogleId: string;
}[] = [
    {
        fileName: "Чек-лист заявки областного конкурса молодежных проектов.",
        fileGoogleId: "1i7QVY03_0iyW_qhrw1vHxAVhXhBvdyTM",
    },
    {
        fileName: "Чек-лист заявки Росмолодёжь. Гранты.",
        fileGoogleId: "1D8ZsDqyzp3LfrWn0l-bmNJHUJRJcFrRC",
    },
    {
        fileName: "Бинго-лист для форумов Росмолодёжи.",
        fileGoogleId: "11zolicpGtc-n47S5sw3ENsqKXKaOFBuo",
    },
];

export const civil_society_development_reports: {
    fileName: string;
    fileGoogleId: string;
}[] = [
    {
        fileName:
            "Доклад о состоянии и развитии институтов гражданского общества в 2022 году",
        fileGoogleId: "1Z8VSgSfESqngZOCkQJk9gRshtIcu-YVu",
    },
    {
        fileName:
            "Доклад о состоянии и развитии институтов гражданского общества в 2021 году",
        fileGoogleId: "1T3H3Z1_PSWj7HdrA5K1FPCcr40SLPsDy",
    },
    {
        fileName:
            "Доклад о состоянии и развитии институтов гражданского общества в 2020 году",
        fileGoogleId: "18Cc72sbehNMLC_EmOpfDA91wI9qkWS0L",
    },
];

export const service_learning_page_items: {
    picture: string;
    text: string;
}[] = [
    {
        picture: "/nko/service_learning/1__business-group.png",
        text: "Привлечение заказчиков с учетом карт компетенций образовательных программ",
    },
    {
        picture: "/nko/service_learning/2__web-design.png",
        text: "Ужегодное формирование «социального заказа» для образовательного модуля «Социальное проектирование» на учебный год",
    },
    {
        picture: "/nko/service_learning/3__new-user.png",
        text: "Верификация социальных заказчиков для сотрудничества с Вологодским государственным университетом",
    },
    {
        picture: "/nko/service_learning/4__check_document.png",
        text: "Верификация «социального заказа», упаковка его в образовательные задачи",
    },
    {
        picture: "/nko/service_learning/5__network-2-1.png",
        text: "Организация и проведение мероприятий по реализации программы",
    },
    {
        picture: "/nko/service_learning/6__management.png",
        text: "Оказание методической поддержки студентам при работе с «социальным заказом»",
    },
];

export const for_students_services_page_items: {
    picture: string;
    title: string;
    list_items: string[];
}[] = [
    {
        picture: "/students/services/1.png",
        title: "Подготовка заявок на гранты",
        list_items: [
            "Экспертная оценка социальной идеи для потенциального участия в конкурсе",
            "Консультации студентов ВоГУ по оформлению заявки на конкурс",
            "Помощь в формировании отчетности по гранту",
        ],
    },
    {
        picture: "/students/services/2.png",
        title: "Поиск ресурсов",
        list_items: [
            "Информирование о предстоящих грантах",
            "Поиск и привлечение ресурсов для реализации студенческих проектов, в т.ч. волонтеров",
        ],
    },
    {
        picture: "/students/services/3.png",
        title: "Методическая поддержка",
        list_items: [
            "Подготовка методических материалов (брошюр, чек-листов, инфографики) по социальному проектированию",
            "Разработка форматов работы над проектами (шаблоны, рабочая тетрадь и т.п.)",
        ],
    },
    {
        picture: "/students/services/4.png",
        title: "Техническая поддержка",
        list_items: [
            "Содействие в обеспечении помещениями, техническими средствами для реализации студенческих проектов",
            "Помощь в регистрации на порталах для участия в грантовых конкурсах",
        ],
    },
    {
        picture: "/students/services/5.png",
        title: "Коммуникационная поддержка",
        list_items: [
            "Проведение семинаров, встреч с победителями грантовых конкурсов",
            "Участие в сборе аналитической информации, проведение интервью, анкетирования, опроса целевых аудиторий",
        ],
    },
    {
        picture: "/students/services/6.png",
        title: "Информационная поддержка",
        list_items: [
            "Регулярное освещение в социальных сетях общественно-значимых мероприятий студентов",
            "Распространение информации реализуемых студенческих  проектах",
        ],
    },
];
