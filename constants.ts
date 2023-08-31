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
        // links: [
        //     { title: "Обучение служением", href: "/service_learning" },
        //     { title: "Партнеры", href: "/partners" },
        // ],
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
    picture: string;
    title: string;
}[] = [
    {
        picture: "/infographics/Целевая группа.jpg",
        title: "Целевая группа",
    },
    {
        picture: "/infographics/Социальная проблема.jpg",
        title: "Социальная проблема",
    },
    {
        picture: "/infographics/Результат проекта.jpg",
        title: "Результат проекта",
    },
    {
        picture: "/infographics/Цель социального проекта.jpg",
        title: "Цель социального проекта",
    },
];
