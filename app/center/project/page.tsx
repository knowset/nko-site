import { PageLayout } from "@/components/Layouts/PageLayout";
import { ProjectList } from "@/components/Project/ProjectList";
import { FaunadbPostsOrError, GeneralPostProps, Project } from "@/types";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Проекты",
    openGraph: {
        url: "https://initsiativa.vercel.app/project",
        type: "website",
        title: "Проекты",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "Проекты",
        card: "summary_large_image",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

async function getProjects() {
    const res = await fetch(`${process.env.API_URL}/api/project`, {
        next: { revalidate: 43200 },
    });

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<Project & GeneralPostProps> =
        await res.json();

    return data;
}

export default async function Page() {
    const data = await getProjects();

    if (!data) return null;

    if (!data.posts) return null;
    return (
        <PageLayout pageName="Проекты">
            <ProjectList posts={data.posts} />
        </PageLayout>
    );
}
