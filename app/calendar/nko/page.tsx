import { PageLayout } from "@/components/Layouts/PageLayout";
import { LinkToFile } from "@/components/LinkToFile";
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
            <div className="flex flex-col gap-4">
                <LinkToFile
                    text="Дорожная карта ФПГ"
                    href="1o7ayVJSPtXKflpWo-Y6V83k45uM0if9C"
                    fileFormat=".pdf"
                />
            </div>
        </PageLayout>
    );
}
