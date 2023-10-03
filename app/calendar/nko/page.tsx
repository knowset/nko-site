import { Card } from "@/components/Card";
import { PageLayout } from "@/components/Layouts/PageLayout";
import { LinkToFile } from "@/components/LinkToFile";
import { H2 } from "@/components/Text/H2";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Календарь. НКО",
    openGraph: {
        url: "https://initsiativa.vercel.app/checklists",
        type: "website",
        title: "Календарь. НКО",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "Календарь. НКО",
        card: "summary_large_image",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

export default function Page() {
    return (
        <PageLayout pageName={["Календарь", "НКО"]}>
            <Card className="flex md:flex-row p-8 items-start" height="sm">
                <Card.Content className="flex flex-col justify-between w-full gap-4 text-left">
                    <Link
                        href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/"
                        className="text-main hover:text-main-hover text-xl font-bold leading-6 underline"
                    >
                        Первый конкурс 2024 года Фонда президентских грантов
                    </Link>
                    <H2 className="font-bold">До 16 октября 2023 года</H2>
                    <H2>
                        В конкурсе могут участвовать некоммерческие организации
                        из всех регионов страны, не имеющие органов власти в
                        составе учредителей.
                    </H2>
                    <LinkToFile
                        text="Дорожная карта «От идеи до заявки на президентский грант»"
                        href="1o7ayVJSPtXKflpWo-Y6V83k45uM0if9C"
                        fileFormat=".pdf"
                    />
                </Card.Content>
            </Card>
        </PageLayout>
    );
}
