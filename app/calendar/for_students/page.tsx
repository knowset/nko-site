import { PageLayout } from "@/components/Layouts/PageLayout";
import { EventForStudentsList } from "@/components/EventForStudents/EFSList";
import { FaunadbPostsOrError, EventForStudents } from "@/types";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const title = "Календарь/Студентам";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Студентам",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "Студентам",
        images: [`/api/og?title=${title}`],
    },
    twitter: {
        title: "Студентам",
        card: "summary_large_image",
        images: [`/api/og?title=${title}`],
    },
};

const getEventsForStudents = async () => {
    const res = await fetch(`${process.env.API_URL}/api/event_for_students`, {
        next: { revalidate: 43200 },
    });

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<EventForStudents> = await res.json();

    return data;
};

export default async function Page() {
    const data = await getEventsForStudents();

    if (!data) return null;

    if (!data.posts) return null;
    return (
        <PageLayout pageName={[...title.split("/")]}>
            <EventForStudentsList posts={data.posts} />
        </PageLayout>
    );
}
