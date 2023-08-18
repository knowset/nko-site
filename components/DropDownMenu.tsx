import { FC, useCallback, useState } from "react";
import { SlArrowDown, SlSocialVkontakte } from "react-icons/sl";
import { BiLogoTelegram } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { useComponentVisible } from "@/hooks/handleHideDropdown";
import Link from "next/link";

interface DropDownMenuProps {
    title: string;
    itemsArray: {
        title?: string;
        items: {
            title: string;
            href: string;
        }[];
    }[];
}

const menuVariants = {
    open: {
        opacity: 1,
        height: "100%",
    },
    closed: {
        opacity: 0,
        height: "0",
    },
};

export const DropDownMenu: FC<DropDownMenuProps> = ({ title, itemsArray }) => {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);

    const toggleMenu = useCallback(() => {
        setIsComponentVisible((current: boolean) => !current);
    }, []);

    return (
        <div
            ref={ref}
            className={`${isComponentVisible ? "z-50" : ""}  relative`}
        >
            <button
                onClick={toggleMenu}
                type="button"
                className="font-medium text-base uppercase group p-2 inline-flex items-center rounded-md bg-transparent hover:bg-gray-200 gap-2"
                aria-expanded="false"
            >
                <span>{title}</span>
                <SlArrowDown
                    className={`${
                        isComponentVisible ? "" : "rotate-180"
                    } transition-all`}
                />
            </button>

            <AnimatePresence>
                {isComponentVisible && (
                    <>
                        {/* <div
                            className="absolute left-0 top-0 w-[100vw] h-[100vh] z-40"
                            onClick={toggleMenu}
                        ></div> */}
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="absolute left-0 -translate-x-[45vw] mx-[50%] md:mx-0 md:left-1/2 mt-3 w-[90vw]  md:max-w-[16rem] md:-translate-x-1/2 transform px-2 sm:px-0 z-50"
                        >
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                {itemsArray.map((i) => (
                                    <>
                                        {!!i.title && (
                                            <div className="bg-white px-2 pt-2">
                                                <p className="text-sm text-gray-600 mx-2 font-medium">
                                                    {i.title}
                                                </p>
                                                <hr />
                                            </div>
                                        )}
                                        {i.items.map((item) => (
                                            <div
                                                key={item.title}
                                                className="relative bg-white px-2 md:py-2"
                                            >
                                                <Link
                                                    href={item.href}
                                                    className=" flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                >
                                                    <p className="text-base font-medium text-gray-900">
                                                        {item.title}
                                                    </p>
                                                </Link>
                                            </div>
                                        ))}
                                    </>
                                ))}
                                <div className="bg-gray-50 px-4 py-4">
                                    <div>
                                        <h3 className="text-base font-medium text-gray-500">
                                            Наши соц. сети
                                        </h3>
                                        <div className="mt-4 text-2xl flex gap-4 justify-start items-center w-full">
                                            <a
                                                href="#"
                                                className="text-gray-900 hover:text-gray-700"
                                            >
                                                <SlSocialVkontakte className="h-10 w-10" />
                                            </a>
                                            <a
                                                href="#"
                                                className="text-gray-900 hover:text-gray-700"
                                            >
                                                <BiLogoTelegram className="h-10 w-10" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
