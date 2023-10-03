import { Card } from "@/components/Card";
import { CardList } from "@/components/CardList";
import { PageLayout } from "@/components/Layouts/PageLayout";
import { H2 } from "@/components/Text/H2";
import { service_learning_page_items } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Обучение служением",
    description:
        "«ОБУЧЕНИЕ СЛУЖЕНИЕМ» — это уникальная программа, которая объединяет теоретическое обучение и практическую общественную деятельность в единый образовательный процесс.",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        description:
            "«ОБУЧЕНИЕ СЛУЖЕНИЕМ» — это уникальная программа, которая объединяет теоретическое обучение и практическую общественную деятельность в единый образовательный процесс.",
        type: "website",
        title: "Обучение служением",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "Обучение служением",
        description:
            "«ОБУЧЕНИЕ СЛУЖЕНИЕМ» — это уникальная программа, которая объединяет теоретическое обучение и практическую общественную деятельность в единый образовательный процесс.",
        card: "summary_large_image",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

export default function Page() {
    return (
        <PageLayout pageName={["НКО", "Обучение служением"]}>
            <div className="flex flex-col gap-8">
                <H2>
                    «
                    <span className="text-main font-bold">
                        ОБУЧЕНИЕ СЛУЖЕНИЕМ
                    </span>
                    » — это уникальная программа, которая объединяет
                    теоретическое обучение и практическую общественную
                    деятельность в единый образовательный процесс. Она
                    способствует не только развитию компетенций учащихся, но и
                    помогает им обнаружить собственную уникальность, находя
                    оптимальный путь для профессионального роста. Через участие
                    в программе «Обучение служением» студенты получают
                    возможность применять свои знания и навыки на практике,
                    работая вместе с некоммерческими организациями и решая
                    актуальные социальные проблемы.
                </H2>
                <div className="w-full border-2 rounded-lg border-main py-2 px-4 lg:px-8">
                    <h2 className="text-lg sm:text-xl text-center text-main">
                        Студенты выполняют не волонтёрские, а профессиональные
                        задачи от некоммерческих организаций согласно своим
                        специализациям и компетенциям.
                    </h2>
                </div>
                <H2>
                    Ресурсный центр НКО ВОГУ «Инициатива» в рамках совместной
                    реализации программы{" "}
                    <span className="text-main font-bold">
                        ОБУЧЕНИЕ СЛУЖЕНИЕМ
                    </span>{" "}
                    с Вологодским государственным университетом осуществляет:
                </H2>
                <CardList>
                    {service_learning_page_items.map((item) => (
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
                                <H2>{item.text}</H2>
                            </Card.Content>
                        </Card>
                    ))}
                </CardList>
            </div>
            <div className="flex flex-col gap-4"></div>
        </PageLayout>
    );
}
