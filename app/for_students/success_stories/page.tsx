import { PageLayout } from "@/components/Layouts/PageLayout";
import { SuccessStoryList } from "@/components/SuccessStory/SuccessStoryList";
import { H2 } from "@/components/Text/H2";
import { FaunadbPostsOrError, SuccessStory } from "@/types";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const title = "Студентам/Истории успеха";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Истории успеха",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "Истории успеха",
        images: [`/api/og?title=${title}`],
    },
    twitter: {
        title: "Истории успеха",
        card: "summary_large_image",
        images: [`/api/og?title=${title}`],
    },
};

const getSuccessStories = async () => {
    const res = await fetch(`${process.env.API_URL}/api/success_story`, {
        next: { revalidate: 43200 },
    });

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<SuccessStory> = await res.json();

    return data;
};

export default async function Page() {
    const data = await getSuccessStories();

    if (!data) return null;

    if (!data.posts) return null;

    return (
        <PageLayout pageName={[...title.split("/")]}>
            <div>
                <H2 size="big">
                    Ресурсный центр оказывает методическую, организационную и
                    информационную поддержку по написанию грантовых заявок,
                    реализации социальных проектов, подготовке и сдаче
                    аналитической и финансовой отчетности. В настоящий момент
                    ряд проектов успешно реализованы, 15 проектов находятся в
                    реализации.
                </H2>
                <hr className="mt-12 border-border-light dark:border-border-dark" />
            </div>
            <SuccessStoryList posts={data.posts} />
        </PageLayout>
    );
}
