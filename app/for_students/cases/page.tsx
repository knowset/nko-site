import { PageLayout } from "@/components/Layouts/PageLayout";
import { H2 } from "@/components/Text/H2";
import { CaseList } from "@/components/Case/CaseList";
import { FaunadbPostsOrError, Case } from "@/types";
import { Metadata } from "next";
import { LinkToForm } from "@/components/LinkToForm";

export const dynamic = "force-dynamic";

const title = "Студентам/Кейсы некоммерческих организаций - партнеров";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Кейсы",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "Кейсы",
        images: [`/api/og?title=${title}`],
    },
    twitter: {
        title: "Кейсы",
        card: "summary_large_image",
        images: [`/api/og?title=${title}`],
    },
};

const getCases = async () => {
    const res = await fetch(`${process.env.API_URL}/api/case`, {
        next: { revalidate: 43200 },
    });

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<Case> = await res.json();

    return data;
};

export default async function Page() {
    const data = await getCases();

    if (!data) return null;

    if (!data.posts) return null;

    return (
        <PageLayout pageName={[...title.split("/")]}>
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
                    <LinkToForm variant="asInlineText">нами</LinkToForm> 
                    .
                </H2>
                <hr className="mt-8 border-border-light dark:border-border-dark" />
            </div>
            <CaseList posts={data.posts} />
        </PageLayout>
    );
}
