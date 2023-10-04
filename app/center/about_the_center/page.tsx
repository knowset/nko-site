import { Card } from "@/components/Card";
import { CardList } from "@/components/CardList";
import { PageLayout } from "@/components/Layouts/PageLayout";
import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { about_the_center_page_items } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";

const title = "Центр/О центре";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "О центре",
    description:
        "Преобразуем инициативы в проекты\nМы готовы поддержать твою самую смелую идею Действуй уже сегодня!",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "О центре",
        description:
            "Автономная некоммерческая организация «Ресурсный центр поддержки социально ориентированных некоммерческих организаций «Инициатива» Вологодского государственного университета» зарегистрирована 10 января 2020 года.",
        images: [`/api/og?title=${title}`],
    },
    twitter: {
        title: "О центре",
        card: "summary_large_image",
        description:
            "Автономная некоммерческая организация «Ресурсный центр поддержки социально ориентированных некоммерческих организаций «Инициатива» Вологодского государственного университета» зарегистрирована 10 января 2020 года.",
        images: [`/api/og?title=${title}`],
    },
};

export default async function Page() {
    return (
        <PageLayout pageName={[...title.split("/")]}>
            <div className="flex flex-col gap-4">
                <H2>
                    Автономная некоммерческая организация «Ресурсный центр
                    поддержки социально ориентированных некоммерческих
                    организаций «Инициатива» Вологодского государственного
                    университета» зарегистрирована 10 января 2020 года.
                </H2>
                <H2>
                    Основная{" "}
                    <span className="text-main font-extrabold">
                        ЦЕЛЬ ДЕЯТЕЛЬНОСТИ{" "}
                    </span>
                    - продвижение социальных инициатив молодежи региона,
                    стимулирование социального проектирования и социальной
                    предпринимательской активности молодежи.
                </H2>
            </div>
            <div className="flex flex-col gap-8">
                <H1>НАПРАВЛЕНИЯ РАБОТЫ ЦЕНТРА</H1>
                <CardList size="medium">
                    {about_the_center_page_items.icons.map((item) => (
                        <Card className="p-16 md:p-8 2xl:p-8">
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
                                <p className="text-center text-lg">
                                    {item.text}
                                </p>
                            </Card.Content>
                        </Card>
                    ))}
                </CardList>
            </div>
            <div className="flex flex-col gap-8 mt-4">
                <H1>КОМАНДА</H1>
                <CardList size="medium">
                    {about_the_center_page_items.team.map((item) => (
                        <Card className="p-8">
                            <Card.Image>
                                <Image
                                    width={256}
                                    height={256}
                                    alt=""
                                    src={item.picture}
                                    placeholder="blur"
                                    blurDataURL={item.picture}
                                    loading="lazy"
                                    quality={100}
                                    className="m-4 rounded-full"
                                />
                            </Card.Image>
                            <Card.Content>
                                <h2 className="text-xl font-bold">
                                    {item.name}
                                </h2>
                                <p>{item.job_title}</p>
                                <p className="p-2 lg:p-4 mt-4 text-lg">
                                    {item.achievements}
                                </p>
                            </Card.Content>
                        </Card>
                    ))}
                </CardList>
            </div>
            <div className="flex flex-col gap-4">
                <H1>ОРГАНЫ УПРАВЛЕНИЯ ЦЕНТРА</H1>
                <div className="flex flex-col gap-4">
                    <H2>
                        Высший руководящий орган центр -{" "}
                        <span className="font-bold">
                            Общее собрание учредителей.
                        </span>{" "}
                        Обеспечивает соблюдение центром целей, в интересах
                        которых он был создан. Состав учредителей центра: Ожогин
                        Михаил Владимирвоич, Якуничева Ольга Николаевна.
                    </H2>
                    <H2>
                        Единоличный исполнительный орган центра -{" "}
                        <span className="font-bold">директор</span>.
                        Осуществляет текущее руководство деятельностью центра,
                        избирается Общим собранием учредителей на 3 года и
                        подотчетен ему. Директор центра - Якуничева Ольга
                        Николаевна.
                    </H2>
                </div>
            </div>
        </PageLayout>
    );
}
