import { PageLayout } from "@/components/Layouts/PageLayout";
import { LinkToFile } from "@/components/LinkToFile";
import { checklists } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Чек-листы",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "Чек-листы",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "Чек-листы",
        card: "summary_large_image",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

export default function Page() {
    return (
        <PageLayout pageName={["Инфотека", "Чек-листы"]}>
            <div className="flex flex-col gap-4">
                {checklists.map((item) => (
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
