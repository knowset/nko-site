import { FC } from "react";
import Image from "next/image";
import { Layout } from "./Layout";
import logo from "@/public/logo.jpg"

export const TopNavBar: FC<{}> = () => {
    return (
        <>
            <Layout>
                <nav className="hidden h-20 md:flex items-center justify-between text-gray-600">
                    <div className="w-full  md:flex md:items-center">
                        <span className="mx-1 text-lg">
                            Ресурсный центр
                            <br />
                            НКО ВоГУ &#34;Инициатива&#34;
                        </span>
                    </div>
                    <div className="w-full flex justify-center">
                        <Image
                            className="rounded-full"
                            src={logo}
                            alt="logo"
                            placeholder="blur"
                            width={64}
                            height={64}
                            priority
                        />
                    </div>
                    <div className="flex items-center justify-end w-full">
                        <span className="mx-1 text-lg text-end">
                            г. Вологда, Ленина, 15
                            <br />
                            vk.com/nko_vogu
                        </span>
                    </div>
                </nav>
                <nav className="h-20 flex md:hidden items-center gap-4 text-gray-600">
                    <div className="flex justify-center">
                        <Image
                            className="rounded-full"
                            src={logo}
                            alt="logo"
                            placeholder="blur"
                            width={64}
                            height={64}
                            priority
                        />
                    </div>
                    <div className="w-full text-gray-600 md:flex md:items-center">
                        <h1 className="mx-1 text-base">
                            Ресурсный центр
                            <br />
                            НКО ВоГУ &#34;Инициатива&#34;
                        </h1>
                    </div>
                </nav>
            </Layout>
        </>
    );
};
