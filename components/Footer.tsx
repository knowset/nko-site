import { FC, Fragment } from "react";
import { navlinks } from "@/constants";
import Link from "next/link";
import { Layout } from "./Layout";

export const Footer: FC<{}> = () => {
    return (
        <nav className="flex-shrink w-full py-4 border-t border-b bg-gray-100">
            <Layout>
                <div className="my-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                    {navlinks.map((section) => (
                        <div className="px-4 mt-8  lg:mt-0" key={"footer-" + section.title}>
                            <h2 className="text-blue-500 text-lg font-bold mb-4">
                                {section.title}
                            </h2>
                            <ul className="flex flex-col gap-2">
                                {section.links.map((link) => (
                                    <li key={"footerlink-" + link.title}>
                                        <Link
                                            className="bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0px_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]"
                                            href={link.href}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Layout>
        </nav>
    );
};
