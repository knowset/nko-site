import { Metadata } from "next";
import Image from "next/image";
import mainimage from "@/public/main/mainpagepic.jpg";
import Loading from "./loading";

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000"),
    title: 'Ресурсный центр НКО ВоГУ "Инициатива"',
    description:
        "Преобразуем инициативы в проекты\nМы готовы поддержать твою самую смелую идею Действуй уже сегодня!",
    openGraph: {
        title: 'Ресурсный центр НКО ВоГУ "Инициатива"',
        description:
            "Преобразуем инициативы в проекты\nМы готовы поддержать твою самую смелую идею Действуй уже сегодня!",
        images: ["/mainpagepic.png"],
    },
};

export default async function Home() {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-main text-center">
                    Преобразуем инициативы в проекты
                </h1>
                <h2 className="text-xl text-center">
                    Мы готовы поддержать твою самую смелую идею <br />
                    Действуй уже сегодня!
                </h2>
                <Image
                    width={700}
                    height={395}
                    alt=""
                    className="mt-4 rounded-lg "
                    src={mainimage}
                    placeholder="blur"
                    priority
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-main text-center">
                    Наша миссия
                </h1>
                <h2 className="text-xl text-center">
                    Мы поддерживаем студентов ВоГУ в реализации социальных
                    инициатив, развиваем уверенность в своих силах, создаем
                    возможности для личностного и профессионального роста
                </h2>
            </div>
        </div>
    );
}
