import { PageLayout } from "@/components/Layouts/PageLayout";
import { LinkToFile } from "@/components/LinkToFile";
import { H2 } from "@/components/Text/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SlSocialVkontakte } from "react-icons/sl";

const title = "Центр/Контакты";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "Контакты",
    description:
        "Преобразуем инициативы в проекты\nМы готовы поддержать твою самую смелую идею Действуй уже сегодня!",
    openGraph: {
        url: "https://initsiativa.vercel.app",
        type: "website",
        title: "Контакты",
        description:
            "Автономная некоммерческая организация «Ресурсный центр поддержки социально ориентированных некоммерческих организаций «Инициатива» Вологодского государственного университета»",
        images: [`/api/og?title=${title}`],
    },
    twitter: {
        title: "Контакты",
        card: "summary_large_image",
        description:
            "Автономная некоммерческая организация «Ресурсный центр поддержки социально ориентированных некоммерческих организаций «Инициатива» Вологодского государственного университета»",
        images: [`/api/og?title=${title}`],
    },
};

export default async function Page() {
    return (
        <PageLayout pageName={[...title.split("/")]}>
            <div className="flex flex-col gap-4">
                <H2>
                    Автономная некоммерческая организация «Ресурсный центр
                    поддержки социально ориентированных некоммерческих
                    организаций «Инициатива» Вологодского государственного
                    университета»
                </H2>
            </div>
            <div className="flex flex-col gap-4">
                <LinkToFile
                    text="Реквизиты центра"
                    href="1MDQqwfobMmVQBihDIrLsOFvWRY9Q30JJ"
                    fileFormat="doc"
                    className="text-2xl font-extrabold text-main"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-8">
                        <Image
                            width={64}
                            height={64}
                            alt=""
                            src="/center/contacts/homepic.png"
                        />
                        <h1 className="mt-4 text-lg font-bold">Наш адрес</h1>
                        <p className="text-center">
                            160000, Вологда, улица Ленина, дом 15 (каб.332)
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-8">
                        <Image
                            width={64}
                            height={64}
                            alt=""
                            src="/center/contacts/emailpic.png"
                        />
                        <h1 className="mt-4 text-lg font-bold">E-mail</h1>
                        <p className="text-center">iakunichevaon@vogu35.ru</p>
                    </div>
                    <div className="flex flex-col items-center p-8">
                        <SlSocialVkontakte className="text-[4rem] text-main" />
                        <h1 className="mt-4 text-lg font-bold">
                            Социальные сети
                        </h1>
                        <Link
                            className="text-center underline"
                            href="https://vk.com/nko_vogu"
                        >
                            https://vk.com/nko_vogu
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
