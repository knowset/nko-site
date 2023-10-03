import { PageLayout } from "@/components/Layouts/PageLayout";
import { LinkToFile } from "@/components/LinkToFile";
import { H2 } from "@/components/Text/H2";
import { civil_society_development_reports } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Доклады о развитии гражданского общества",
    openGraph: {
        url: "https://initsiativa.vercel.app",
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
        <PageLayout
            pageName={["Инфотека", "Доклады о развитии гражданского общества"]}
        >
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
                        <LinkToFile
                            text={item.fileName}
                            href={item.fileGoogleId}
                            fileFormat=".pdf"
                        />
                    </div>
                ))}
            </div>
        </PageLayout>
    );
}
