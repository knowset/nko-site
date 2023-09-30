import { PageLayout } from "@/components/Layouts/PageLayout";
import { TrainingList } from "@/components/Training/TrainingList";
import { FaunadbPostsOrError, Training } from "@/types";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Тренинги",
    openGraph: {
        url: "https://initsiativa.vercel.app/project",
        type: "website",
        title: "Тренинги",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "Тренинги",
        card: "summary_large_image",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

async function getTrainings() {
    const res = await fetch(`${process.env.API_URL}/api/training`);

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<Training> = await res.json();

    return data;
}

export default async function Page() {
    const data = await getTrainings();

    if (!data) return null;

    if (!data.posts) return null;

    return (
        <PageLayout pageName="Тренинги">
            <TrainingList posts={data.posts} />
        </PageLayout>
    );
}
