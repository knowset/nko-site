import { Card } from "@/components/Card";
import { CardList } from "@/components/CardList";
import { PageLayout } from "@/components/Layouts/PageLayout";
import { H2 } from "@/components/Text/H2";
import { for_students_services_page_items } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Студентам. Услуги",
    description:
        "Преобразуем инициативы в проекты\nМы готовы поддержать твою самую смелую идею Действуй уже сегодня!",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "Студентам. Услуги",
        description:
            "Автономная некоммерческая организация «Ресурсный центр поддержки социально ориентированных некоммерческих организаций «Инициатива» Вологодского государственного университета» зарегистрирована 10 января 2020 года.",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "Студентам. Услуги",
        card: "summary_large_image",
        description:
            "Автономная некоммерческая организация «Ресурсный центр поддержки социально ориентированных некоммерческих организаций «Инициатива» Вологодского государственного университета» зарегистрирована 10 января 2020 года.",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

export default async function Page() {
    return (
        <PageLayout pageName="Студентам. Услуги">
            <CardList size="medium">
                {for_students_services_page_items.map((item) => (
                    <Card className="p-8 md:p-8 2xl:p-8 gap-4">
                        <Card.Image>
                            <Image
                                width={128}
                                height={128}
                                alt=""
                                src={item.picture}
                                placeholder="blur"
                                blurDataURL={item.picture}
                                loading="lazy"
                                quality={100}
                                className="m-4"
                            />
                        </Card.Image>
                        <Card.Content>
                            <H2 className="text-xl font-bold">{item.title}</H2>
                            <ul className="mt-4 flex flex-col gap-2 sm:p-4">
                                {item.list_items.map((list_item) => (
                                    <H2>
                                        <li className="before:list-disc before:text-main inline-flex before:content-['•'] w-full gap-4 text-left">
                                            {list_item}
                                        </li>
                                    </H2>
                                ))}
                            </ul>
                        </Card.Content>
                    </Card>
                ))}
            </CardList>
        </PageLayout>
    );
}
