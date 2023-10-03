import { PageLayout } from "@/components/Layouts/PageLayout";
import { PartnerList } from "@/components/Partner/PartnerList";
import { FaunadbPostsOrError, Partner } from "@/types";
import { Metadata } from "next";
import { cache } from "react";

export const revalidate = 43200;

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Партнеры",
    openGraph: {
        url: "https://initsiativa.vercel.app/project",
        type: "website",
        title: "Партнеры",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "Партнеры",
        card: "summary_large_image",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

const getPartners = cache(async () => {
    const res = await fetch(`${process.env.API_URL}/api/partner`);

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<Partner> = await res.json();

    return data;
});

export default async function Page() {
    const data = await getPartners();

    if (!data) return null;

    if (!data.posts) return null;

    return (
        <PageLayout pageName={["НКО", "Партнеры"]}>
            <PartnerList posts={data.posts} />
        </PageLayout>
    );
}
