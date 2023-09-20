import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { checklists } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Чек-листы",
    openGraph: {
        url: "https://initsiativa.vercel.app/checklists",
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
        <div className="flex flex-col gap-10 w-full">
            <div>
                <H1 textsize="text-4xl">Чек-листы</H1>
                <hr className="mt-4 dark:border-zinc-700" />
            </div>
            <div className="flex flex-col gap-4">
                {checklists.map((item) => (
                    <div>
                        <H2>
                            {item.fileName}{" "}
                            <a
                                className="text-main"
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
