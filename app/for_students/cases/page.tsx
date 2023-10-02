import { PageLayout } from "@/components/Layouts/PageLayout";
import { H2 } from "@/components/Text/H2";
import { CaseList } from "@/components/Case/CaseList";
import { FaunadbPostsOrError, Case } from "@/types";
import { Metadata } from "next";
import Loading from "./loading";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Кейсы",
    openGraph: {
        url: "https://initsiativa.vercel.app/project",
        type: "website",
        title: "Кейсы",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "Кейсы",
        card: "summary_large_image",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

async function getCases() {
    const res = await fetch(`${process.env.API_URL}/api/case`, {
        next: { revalidate: 43200 },
    });

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<Case> = await res.json();

    return data;
}

export default async function Page() {
    const data = await getCases();

    if (!data) return null;

    if (!data.posts) return null;
    return (
        <PageLayout pageName="Кейсы некоммерческих организаций - партнеров">
            <div className="flex flex-col gap-4">
                <H2 size="big">
                    - формат вовлечения студентов в работу некоммерческих
                    организаций.
                </H2>
                <H2>
                    Для студенческих команд предлагаются кейсы от некоммерческих
                    организаций, которые можно взять в разработку. Контакты
                    представителей НКО указаны в кейсах.
                </H2>
                <H2>
                    Если у вас есть вопросы по работе с кейсами - свяжитесь с{" "}
                    <a href="/" className="text-main">
                        нами
                    </a>
                    .
                </H2>
                <hr className="mt-8 border-border-light dark:border-border-dark" />
            </div>
            <CaseList posts={data.posts} />
        </PageLayout>
    );
}
