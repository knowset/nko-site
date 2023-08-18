import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "./Layout";

export const TextHeader: FC<{}> = () => {
    return (
        <Layout>
            <div className="hidden md:flex flex-col items-center py-4">
                <div className="grid grid-cols-3">
                    <p className="text-base md:text-2xl text-black font-medium text-start mt-auto">
                        Ресурсный центр
                        <br />
                        НКО ВоГУ &#34;Инициатива&#34;
                    </p>
                    <Link className="flex justify-center" href="/">
                        <Image
                            className="rounded-full"
                            src="/logo.jpg"
                            width={128}
                            height={128}
                            alt="logo"
                        />
                    </Link>
                    <p className="text-base md:text-2xl text-black font-medium text-end mt-auto">
                        г. Вологда, Ленина, 15
                        <br />
                        vk.com/nko_vogu
                    </p>
                </div>
            </div>
        </Layout>
    );
};
