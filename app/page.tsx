import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    metadataBase: new URL("https://inciativa.netlify.app"),
    title: 'Ресурсный центр НКО ВоГУ "Инициатива"',
    description:
        "Преобразуем инициативы в проекты\nМы готовы поддержать твою самую смелую идею Действуй уже сегодня!",
    openGraph: {
        url: "https://inciativa.netlify.app",
        type: "website",
        title: 'Ресурсный центр НКО ВоГУ "Инициатива"',
        description:
            "Преобразуем инициативы в проекты\nМы готовы поддержать твою самую смелую идею Действуй уже сегодня!",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-yRmo35-aqmWe6ulXltd0jPizxZn7BN8UQYVAdAsH3zLlL_zA4vC0z01WJT7afJgXp9Hm9oAT4ih5Opz-i5sYLHVMQVBA=s1600",
        ],
    },
    twitter: {
        title: 'Ресурсный центр НКО ВоГУ "Инициатива"',
        card: "summary_large_image",
        description:
            "Преобразуем инициативы в проекты\nМы готовы поддержать твою самую смелую идею Действуй уже сегодня!",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-yRmo35-aqmWe6ulXltd0jPizxZn7BN8UQYVAdAsH3zLlL_zA4vC0z01WJT7afJgXp9Hm9oAT4ih5Opz-i5sYLHVMQVBA=s1600",
        ],
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
                    src="https://lh3.googleusercontent.com/drive-viewer/AITFw-yRmo35-aqmWe6ulXltd0jPizxZn7BN8UQYVAdAsH3zLlL_zA4vC0z01WJT7afJgXp9Hm9oAT4ih5Opz-i5sYLHVMQVBA=s1600"
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
