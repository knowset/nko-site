import { PageLayout } from "@/components/Layouts/PageLayout";
import { PartnerList } from "@/components/Partner/PartnerList";
import { FaunadbPostsOrError, Partner } from "@/types";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Партнеры",
    openGraph: {
        url: "https://initsiativa.vercel.app",
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

const getPartners = async () => {
    const res = await fetch(`${process.env.API_URL}/api/partner`, {
        next: { revalidate: 43200 },
    });

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<Partner> = await res.json();

    return data;
};

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
