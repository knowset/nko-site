import { PageLayout } from "@/components/Layouts/PageLayout";
import { ProjectList } from "@/components/Project/ProjectList";
import { FaunadbPostsOrError, GeneralPostProps, Project } from "@/types";
import { Metadata } from "next";

const title = "Центр/Проекты";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Проекты",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "Проекты",
        images: [`/api/og?title=${title}`],
    },
    twitter: {
        title: "Проекты",
        card: "summary_large_image",
        images: [`/api/og?title=${title}`],
    },
};

const getProjects = async () => {
    const res = await fetch(`${process.env.API_URL}/api/project`, {
        next: { revalidate: 43200 },
    });

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<Project & GeneralPostProps> =
        await res.json();

    return data;
};

export default async function Page() {
    const data = await getProjects();

    if (!data) return null;

    if (!data.posts) return null;

    return (
        <PageLayout pageName={[...title.split("/")]}>
            <ProjectList posts={data.posts} />
        </PageLayout>
    );
}
