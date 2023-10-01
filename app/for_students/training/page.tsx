import { PageLayout } from "@/components/Layouts/PageLayout";
import { H2 } from "@/components/Text/H2";
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
            <div>
                <H2 size="big">
                    Ресурсный центр «Инициатива» оказывает услуги по организации
                    обучающих программ по социальному проектированию для
                    студентов и членов НКО; практические занятия: акселераторы
                    для молодежи, тренинги по социальному проектированию, а
                    также индивидуальные консультации по доработке проектов для
                    участников молодежных грантовых конкурсов.
                </H2>
                <hr className="mt-12 border-border-light dark:border-border-dark" />
            </div>
            <TrainingList posts={data.posts} />
        </PageLayout>
    );
}
