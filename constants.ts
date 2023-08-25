export const navbarLinks = [
    {
        title: "НКО",
        href: "/nko",
    },
    {
        title: "Студентам",
        href: "/for_students",
    },
    {
        title: "Инфотека",
        href: "/infoteka",
    },
    {
        title: "Календарь",
        href: "/calendar",
    },
];

export const additionalNavbarLinks = [
    {
        title: "О центре",
        href: "/about_the_center",
    },
    {
        title: "Проекты",
        href: "/project",
    },
    {
        title: "Истории успеха",
        href: "/success_stories",
    },
    {
        title: "Кейсы",
        href: "/cases",
    },
    {
        title: "Контакты",
        href: "/contacts",
    },
];

export const navlinks: {
    title: string;
    links: { title: string; href: string }[];
}[] = [
    {
        title: "Центр",
        links: [
            { title: "О центре", href: "/" },
            { title: "Документы", href: "/documentation" },
            { title: "Проекты", href: "/project" },
            { title: "Контакты", href: "/contacts" },
        ],
    },
    {
        title: "Студентам",
        links: [
            { title: "Услуги", href: "/services" },
            { title: "Тренинги", href: "/trainings" },
            { title: "Истории успеха", href: "/success_stories" },
            { title: "Кейсы", href: "/cases" },
        ],
    },
    {
        title: "НКО",
        links: [
            { title: "Обучение служением", href: "/service_learning" },
            { title: "Партнеры", href: "/partners" },
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
        links: [
            { title: "Студентам", href: "/for_students" },
            { title: "Нко", href: "/nko" },
        ],
    },
];

export const documentation: {
    title: string;
    links: { title: string; href: string }[];
}[] = [
    {
        title: "УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ ЦЕНТРА",
        links: [
            { title: "Устав центра", href: "/Устав РЦ_новая редакция.pdf" },
            {
                title: "Свидетельство о постановке на учет юридического лица в налоговом органе",
                href: "/Свидетельство_о_постановке_на_учет_РЦ.pdf",
            },
            {
                title: "Свидетельство о внесении записи в Единый государственный реестр (ОГРН)",
                href: "/Свидетельство_о_постановке_на_учет_РЦ.pdf",
            },
            {
                title: "Свидетельство о государственной регистрации некоммерческой организации",
                href: "/Свидетельство о регистрации РЦ.pdf",
            },
        ],
    },
    {
        title: "ГОДОВЫЕ ПУБЛИЧНЫЕ ОТЧЕТЫ ЦЕНТРА",
        links: [
            {
                title: "Отчет центра за 2022 год",
                href: "",
            },
            {
                title: "Отчет центра за 2021 год",
                href: "",
            },
            {
                title: "Отчет центра за 2020 год",
                href: "",
            },
        ],
    },
];
