import { FC } from "react";
import Image from "next/image";
import { GlobalLayout } from "../Layouts/GlobalLayout";
import Link from "next/link";
import logo from "@/public/logo.png";

export const Logo: FC<{}> = () => {
    return (
        <>
            <GlobalLayout>
                <nav className="hidden h-[90px] md:flex items-center justify-between text-gray-600 dark:text-gray-400">
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
                            src={logo.src}
                            alt="logo"
                            placeholder="blur"
                            blurDataURL={logo.blurDataURL}
                            width={64}
                            height={64}
                            priority
                        />
                    </div>
                    <div className="flex items-center justify-end w-full">
                        <span className="mx-1 text-lg text-end">
                            г. Вологда, Ленина, 15
                            <br />
                            <Link
                                href="https://vk.com/nko_vogu"
                                className="underline"
                            >
                                vk.com/nko_vogu
                            </Link>
                        </span>
                    </div>
                </nav>
                <nav className="h-[90px] flex md:hidden items-center gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex justify-center">
                        <Image
                            className="rounded-full"
                            src={logo.src}
                            alt="logo"
                            placeholder="blur"
                            blurDataURL={logo.blurDataURL}
                            width={64}
                            height={64}
                            priority
                        />
                    </div>
                    <div className="w-full md:flex md:items-center">
                        <h1 className="mx-1 text-base">
                            Ресурсный центр
                            <br />
                            НКО ВоГУ &#34;Инициатива&#34;
                        </h1>
                    </div>
                </nav>
            </GlobalLayout>
        </>
    );
};
