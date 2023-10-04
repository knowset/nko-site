import { PageLayout } from "@/components/Layouts/PageLayout";
import { LinkToFile } from "@/components/LinkToFile";
import { checklists } from "@/constants";
import { Metadata } from "next";

const title = "Инфотека/Чек-листы";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Чек-листы",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "Чек-листы",
        images: [`/api/og?title=${title}`],
    },
    twitter: {
        title: "Чек-листы",
        card: "summary_large_image",
        images: [`/api/og?title=${title}`],
    },
};

export default function Page() {
    return (
        <PageLayout pageName={[...title.split("/")]}>
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
