import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { civil_society_development_reports } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Доклады о развитии гражданского общества",
    openGraph: {
        url: "https://initsiativa.vercel.app/checklists",
        type: "website",
        title: "Доклады о развитии гражданского общества",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "Доклады о развитии гражданского общества",
        card: "summary_large_image",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

export default function Page() {
    return (
        <div className="flex flex-col gap-10 w-full">
            <div>
                <H1 textsize="text-4xl">
                    Доклады о развитии гражданского общества
                </H1>
                <hr className="mt-4 dark:border-zinc-700" />
            </div>
            <div className="flex flex-col gap-4">
                <H2>
                    Информационно-аналитические доклады подготовлены АНО
                    «Ресурсный центр поддержки социально ориентированных
                    некоммерческих организаций «ИНИЦИАТИВА» при поддержке
                    Правительства Вологодской области
                </H2>
                <H2>Фотоматериалы – Общественная палата Вологодской области</H2>
            </div>
            <div className="flex flex-col gap-4">
                {civil_society_development_reports.map((item) => (
                    <div>
                        <H2>
                            {item.fileName}{" "}
                            <a
                                className="text-main hover:text-main"
                                href={
                                    "https://drive.google.com/uc?export=view&id=" +
                                    item.fileGoogleId
                                }
                            >
                                (Скачать .pdf)
                            </a>
                        </H2>
                    </div>
                ))}
            </div>
        </div>
    );
}
