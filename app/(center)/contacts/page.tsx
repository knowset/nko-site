import { StaticPageSkeleton } from "@/components/Skeletons/StaticPageSkeleton";
import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SlSocialVkontakte } from "react-icons/sl";

export const metadata: Metadata = {
    title: "Контакты",
};

export default async function Page() {
    return (
        <div className="flex flex-col gap-10 mb-auto">
            <div>
                <H1 textsize="text-4xl">Контакты</H1>
                <hr className="mt-4" />
            </div>
            <div className="flex flex-col gap-4">
                <H2>
                    Автономная некоммерческая организация «Ресурсный центр
                    поддержки социально ориентированных некоммерческих
                    организаций «Инициатива» Вологодского государственного
                    университета»
                </H2>
            </div>
            <div className="flex flex-col gap-4">
                <H1>
                    Реквизиты центра <span>(скачать pdf)</span>
                </H1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-8">
                        <Image
                            width={64}
                            height={64}
                            alt=""
                            src="/contacts_homepic.png"
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
                            src="/contacts_emailpic.png"
                        />
                        <h1 className="mt-4 text-lg font-bold">E-mail</h1>
                        <p className="text-center">iakunichevaon@vogu35.ru</p>
                    </div>
                    <div className="flex flex-col items-center p-8">
                        <SlSocialVkontakte className="text-[4rem] text-blue-400" />
                        <h1 className="mt-4 text-lg font-bold">
                            Социальные сети
                        </h1>
                        <Link
                            className="text-center"
                            href="https://vk.com/nko_vogu"
                        >
                            https://vk.com/nko_vogu
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
