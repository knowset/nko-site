import { documentation } from "@/constants";

export default async function Page() {
    setTimeout(() => console.log("asjkdf"), 3000);

    return (
        <div className="flex flex-col gap-12">
            <div>
                <h1 className="text-4xl font-extrabold text-blue-500">
                    Документы
                </h1>
                <hr className="my-4" />
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold text-blue-500">
                    ПОЛНОЕ НАИМЕНОВАНИЕ ЦЕНТРА
                </h2>
                <h2 className="text-lg sm:text-xl">
                    Автономная некоммерческая организация «Ресурсный центр
                    поддержки социально ориентированных некоммерческих
                    организаций «Инициатива» Вологодского государственного
                    университета»
                </h2>
                <h2 className="text-lg sm:text-xl">
                    ОГРН 1203500000219 ИНН 3525452411
                </h2>
            </div>
            {documentation.map((section) => (
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-extrabold text-blue-500">
                        {section.title}
                    </h2>
                    {section.links.map((link) => (
                        <h2 className="text-lg sm:text-xl">
                            {link.title} <a className="text-blue-500" href={link.href}>(скачать pdf)</a>
                        </h2>
                    ))}
                </div>
            ))}
        </div>
    );
}
