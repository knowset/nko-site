import { PageLayout } from "@/components/Layouts/PageLayout";
import { EventForStudentsList } from "@/components/EventForStudents/EFSList";
import { FaunadbPostsOrError, EventForStudents } from "@/types";
import { Metadata } from "next";
import { cache } from "react";

export const revalidate = 43200;

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Студентам",
    openGraph: {
        url: "https://initsiativa.vercel.app/project",
        type: "website",
        title: "Студентам",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "Студентам",
        card: "summary_large_image",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

const getEventsForStudents = cache(async () => {
    const res = await fetch(`${process.env.API_URL}/api/event_for_students`);

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<EventForStudents> = await res.json();

    return data;
});

export default async function Page() {
    const data = await getEventsForStudents();

    if (!data) return null;

    if (!data.posts) return null;
    return (
        <PageLayout pageName={["Календарь", "Студентам"]}>
            <EventForStudentsList posts={data.posts} />
        </PageLayout>
    );
}
