import { PageLayout } from "@/components/Layouts/PageLayout";
import { infographics } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";

const title = "Инфотека/Инфографика";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Инфографика",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "Инфографика",
        images: [`/api/og?title=${title}`],
    },
    twitter: {
        title: "Инфографика",
        card: "summary_large_image",
        images: [`/api/og?title=${title}`],
    },
};

export default function Page() {
    return (
        <PageLayout pageName={[...title.split("/")]}>
            {infographics.map((item) => (
                <div
                    key={"infographics-item-" + item.fileName}
                    className="flex flex-col justify-center items-center gap-24 text-center"
                >
                    <div className="flex flex-col gap-8 justify-center items-center my-4">
                        <h1 className="text-3xl xl:text-4xl">
                            {item.fileName}
                        </h1>
                        <Image
                            src={
                                "https://drive.google.com/thumbnail?id=" +
                                item.pictureGoogleId +
                                "&sz=w4242-h4000"
                            }
                            placeholder="blur"
                            blurDataURL={
                                "https://drive.google.com/thumbnail?id=" +
                                item.pictureGoogleId +
                                "&sz=w424-h400"
                            }
                            width={4242}
                            height={4000}
                            alt={item.fileName}
                            className="rounded-md shadow-lg"
                        />
                    </div>
                </div>
            ))}
        </PageLayout>
    );
}
