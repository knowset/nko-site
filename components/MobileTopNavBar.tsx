"use client";

import { FC, useCallback, useState } from "react";
import Image from "next/image";
import { Layout } from "./Layout";
import { Navbar } from "./MobileNavbar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { TopNavBar } from "./TopNavBar";
import { TextHeader } from "./TopicHeader";
import { TopicNav } from "./NavBar";

export const MobileTopNavBar: FC<{}> = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = useCallback(() => {
        setShowMenu((current) => !current);
    }, []);


    return (
        <>
            {showMenu && <Navbar isOpen={showMenu} toggleMenu={toggleMenu} />}
            <div className="h-16 w-full bg-blue-600 fixed select-none z-50 text-lg md:text-xl">
                <Layout>
                    <div className="h-full text-center flex justify-between">
                        <div className="h-full flex gap-4 items-center">
                            {/* <div className='bg-black h-12 w-12 rounded-full'></div> */}
                            <Image
                                alt="logo"
                                src="/logo.jpg"
                                width="48"
                                height="48"
                                className="rounded-full"
                                quality={100}
                            />
                            <div className="text-white text-left">
                                <p>Ресурсный центр</p>
                                <p>НКО Вогу &#34;Инициатива&#34;</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center left-4 cursor-pointer">
                            <div
                                onClick={toggleMenu}
                                className="h-10 border-2 rounded-md flex justify-center items-center px-2 hover:border-cyan-700 select-none"
                            >
                                <p className="hidden md:flex">Меню</p>
                                <p className="flex md:hidden text-2xl text-white">
                                    {showMenu ? (
                                        <AiOutlineClose />
                                    ) : (
                                        <AiOutlineMenu />
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    );
};
