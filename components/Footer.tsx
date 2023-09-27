import { FC, Fragment } from "react";
import { navlinks } from "@/constants";
import { GlobalLayout } from "./Layouts/GlobalLayout";
import { NavLink } from "./NavLink";
import Image from "next/image";

export const Footer: FC<{}> = () => {
    return (
        <nav className="flex-shrink w-full py-4 border-t bg-secondary-light dark:bg-secondary-dark border-border-light dark:border-border-dark">
            <GlobalLayout>
                <div className="divide-y divide-border-light dark:divide-border-dark">
                    <div className="my-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                        {navlinks.map((section) => (
                            <div
                                className="px-4 mt-8  lg:mt-0"
                                key={"footer-" + section.title}
                            >
                                <h2 className="text-main text-lg font-bold mb-2">
                                    {section.title}
                                </h2>
                                <ul className="flex flex-col gap-2">
                                    {section.links ? (
                                        section.links.map((link) => (
                                            <li
                                                key={"footerlink-" + link.title}
                                            >
                                                <NavLink href={link.href}>
                                                    {link.title}
                                                </NavLink>
                                            </li>
                                        ))
                                    ) : (
                                        <li
                                            key={
                                                "footerlink-" +
                                                section.title +
                                                "undefined"
                                            }
                                            className="text-zinc-500"
                                        >
                                            Раздел появится в ближайшее время
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full justify-center items-center h-full">
                        <Image
                            width={1200}
                            height={569}
                            alt="fpg_logo"
                            src={
                                "https://lh3.googleusercontent.com/drive-viewer/AK7aPaDiEVyA45g_T6dCKkRsi61cDfTN6JyZzGsBD0dYnN-xeM88ng9zK7H2JMUZ5NysGCGw73wEkGF0dMLnz1trNTVJPI_U=s1600"
                            }
                            className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
                        />
                    </div>
                </div>
            </GlobalLayout>
        </nav>
    );
};
