import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { service_learning } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import OGImage from "./opengraph-image";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Обучение служением",
    description:
        "«ОБУЧЕНИЕ СЛУЖЕНИЕМ» — это уникальная программа, которая объединяет теоретическое обучение и практическую общественную деятельность в единый образовательный процесс.",
    openGraph: {
        url: "https://initsiativa.vercel.app/service_learning",
        description: " ",
        type: "website",
        title: "Обучение служением",
    },
    twitter: {
        title: "Обучение служением",
        description: " ",
        card: "summary_large_image",
    },
};

export default function Page() {
    return (
        <div className="flex flex-col gap-10 w-full">
            <div>
                <H1 textsize="text-4xl">Обучение служением</H1>
                <hr className="mt-4 dark:border-zinc-700" />
            </div>
            <div className="flex flex-col gap-4">
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
                <div className="mt-4 grid sm:grid-cols-2 gap-8 lg:px-24">
                    {service_learning.map((item) => (
                        <div className="mt-4 sm:mt-2 lg:mt-0 flex flex-col items-center gap-4 p-8 overflow-hidden rounded-lg shadow-md ring-1 ring-black ring-opacity-5 bg-white">
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
                            <p className="text-center text-lg">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4"></div>
        </div>
    );
}
