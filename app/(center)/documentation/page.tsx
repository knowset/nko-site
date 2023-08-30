import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { documentation } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Документы"
}

export default async function Page() {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <H1 textsize="text-4xl">Документы</H1>
                <hr className="mt-4" />
            </div>
            <div className="flex flex-col gap-4">
                <H1>ПОЛНОЕ НАИМЕНОВАНИЕ ЦЕНТРА</H1>
                <H2>
                    Автономная некоммерческая организация «Ресурсный центр
                    поддержки социально ориентированных некоммерческих
                    организаций «Инициатива» Вологодского государственного
                    университета»
                </H2>
                <H2>ОГРН 1203500000219 ИНН 3525452411</H2>
            </div>
            {documentation.map((section) => (
                <div className="flex flex-col gap-4">
                    <H1>{section.title}</H1>
                    {section.links.map((link) => (
                        <H2>
                            {link.title}{" "}
                            <a className="text-blue-500" href={link.href}>
                                (скачать pdf)
                            </a>
                        </H2>
                    ))}
                </div>
            ))}
        </div>
    );
}
