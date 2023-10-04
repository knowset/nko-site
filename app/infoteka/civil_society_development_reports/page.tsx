import { PageLayout } from "@/components/Layouts/PageLayout";
import { LinkToFile } from "@/components/LinkToFile";
import { H2 } from "@/components/Text/H2";
import { civil_society_development_reports } from "@/constants";
import { Metadata } from "next";

const title =
    "Инфотека/Доклады о развитии гражданского общества в Вологодской области";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Доклады о развитии гражданского общества в Вологодской области",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "Доклады о развитии гражданского общества в Вологодской области",
        images: [`/api/og?title=${title}`],
    },
    twitter: {
        title: "Доклады о развитии гражданского общества в Вологодской области",
        card: "summary_large_image",
        images: [`/api/og?title=${title}`],
    },
};

export default function Page() {
    return (
        <PageLayout pageName={[...title.split("/")]}>
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
