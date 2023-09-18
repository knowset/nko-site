export const navlinks: {
    title: string;
    links?: { title: string; href: string }[];
}[] = [
    {
        title: "Центр",
        links: [
            { title: "О центре", href: "/about_the_center" },
            { title: "Документы", href: "/documentation" },
            { title: "Проекты", href: "/project" },
            { title: "Контакты", href: "/contacts" },
        ],
    },
    {
        title: "Студентам",
        // links: [
        //     { title: "Услуги", href: "/services" },
        //     { title: "Тренинги", href: "/trainings" },
        //     { title: "Истории успеха", href: "/success_stories" },
        //     { title: "Кейсы", href: "/cases" },
        // ],
    },
    {
        title: "НКО",
        links: [
            { title: "Обучение служением", href: "/service_learning" },
            //     { title: "Партнеры", href: "/partners" },
        ],
    },
    {
        title: "Инфотека",
        links: [
            { title: "Инфографика", href: "/infographics" },
            { title: "Чек-листы", href: "/checklists" },
            {
                title: "Доклады о развитии гражданского общества",
                href: "/civil_society_development_reports",
            },
        ],
    },
    {
        title: "Календарь",
        // links: [
        //     { title: "Студентам", href: "/for_students" },
        //     { title: "Нко", href: "/nko" },
        // ],
    },
];

export const documentation: {
    title: string;
    links: { title: string; href: string }[];
}[] = [
    {
        title: "УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ ЦЕНТРА",
        links: [
            {
                title: "Устав центра",
                href: "documents/Устав РЦ_новая редакция.pdf",
            },
            {
                title: "Свидетельство о постановке на учет юридического лица в налоговом органе",
                href: "documents/Свидетельство_о_постановке_на_учет_РЦ.pdf",
            },
            {
                title: "Свидетельство о внесении записи в Единый государственный реестр (ОГРН)",
                href: "documents/Свидетельство_о_постановке_на_учет_РЦ.pdf",
            },
            {
                title: "Свидетельство о государственной регистрации некоммерческой организации",
                href: "documents/Свидетельство о регистрации РЦ.pdf",
            },
        ],
    },
    {
        title: "ГОДОВЫЕ ПУБЛИЧНЫЕ ОТЧЕТЫ ЦЕНТРА",
        links: [
            {
                title: "Отчет центра за 2022 год",
                href: "documents/Отчет центра за 2022 год.pdf",
            },
            {
                title: "Отчет центра за 2021 год",
                href: "documents/Отчет центра за 2021 год.pdf",
            },
            {
                title: "Отчет центра за 2020 год",
                href: "documents/Отчет центра за 2020 год.pdf",
            },
        ],
    },
];

export const directions_of_work_of_the_center: {
    picture: string;
    text: string;
}[] = [
    {
        picture: "/about_the_center/directions_of_work_of_the_center_1.png",
        text: "Содействие в формировании и развитии молодежных общественных объединений",
    },
    {
        picture: "/about_the_center/directions_of_work_of_the_center_2.png",
        text: "Организация и проведение мероприятий, направленных на развитие гражданской активности молодежи, вовлечение молодежи в проектную и социальную деятельность",
    },
    {
        picture: "/about_the_center/directions_of_work_of_the_center_3.png",
        text: "Распространение информации полезной для успешной деятельности некоммерческих организаций и поддержки социальных инициатив молодёжи",
    },
    {
        picture: "/about_the_center/directions_of_work_of_the_center_4.png",
        text: "Разработка и изготовление методических материалов в сфере социального проектирования",
    },
];

export const team: {
    picture: string;
    name: string;
    job_title: string;
    achievements: string;
}[] = [
    {
        picture: "/about_the_center/people/yakunicheva_olga.png",
        name: "Якуничева Ольга",
        job_title: "Директор",
        achievements:
            "Тренер по социальному проектированию, эксперт Росмолодёжь. Гранты, конкурса «Моя страна – моя Россия», областного конкурса молодежных проектов",
    },
    {
        picture: "/about_the_center/people/ozhogin_michail.png",
        name: "Ожогин Михаил",
        job_title: "Менеджер",
        achievements:
            "Тренер по социальному проектированию, эксперт конкурса «Моя страна – моя Россия», областных конкурсов инициатив членов детских и молодежных общественных объединений",
    },
];

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

export const service_learning: {
    picture: string;
    text: string;
}[] = [
    {
        picture: "/service_learning/1__business-group.png",
        text: "Привлечение заказчиков с учетом карт компетенций образовательных программ",
    },
    {
        picture: "/service_learning/2__web-design.png",
        text: "Ужегодное формирование «социального заказа» для образовательного модуля «Социальное проектирование» на учебный год",
    },
    {
        picture: "/service_learning/3__new-user.png",
        text: "Верификация социальных заказчиков для сотрудничества с Вологодским государственным университетом",
    },
    {
        picture: "/service_learning/4__check_document.png",
        text: "Верификация «социального заказа», упаковка его в образовательные задачи",
    },
    {
        picture: "/service_learning/5__network-2-1.png",
        text: "Организация и проведение мероприятий по реализации программы",
    },
    {
        picture: "/service_learning/6__management.png",
        text: "Оказание методической поддержки студентам при работе с «социальным заказом»",
    },
];
