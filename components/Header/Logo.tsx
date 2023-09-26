import { FC } from "react";
import Image from "next/image";
import { Layout } from "../Layouts/Layout";
import Link from "next/link";

export const Logo: FC<{}> = () => {
    return (
        <>
            <Layout>
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
                            src="https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600"
                            alt="logo"
                            placeholder="blur"
                            blurDataURL="https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600"
                            width={64}
                            height={64}
                            priority
                        />
                    </div>
                    <div className="flex items-center justify-end w-full">
                        <span className="mx-1 text-lg text-end">
                            г. Вологда, Ленина, 15
                            <br />
                            <Link href="https://vk.com/nko_vogu" className="underline">
                            vk.com/nko_vogu
                            </Link>
                        </span>
                    </div>
                </nav>
                <nav className="h-[90px] flex md:hidden items-center gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex justify-center">
                        <Image
                            className="rounded-full"
                            src="https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600"
                            alt="logo"
                            placeholder="blur"
                            blurDataURL="https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600"
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
            </Layout>
        </>
    );
};
