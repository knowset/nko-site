import { FC, Fragment } from "react";
import { navlinks } from "@/constants";
import Link from "next/link";
import { Layout } from "./Layout";
import { NavLink } from "./NavLink";

export const Footer: FC<{}> = () => {
    return (
        <nav className="flex-shrink w-full py-4 border-t border-b bg-secondary-light dark:bg-secondary-dark border-border-light dark:border-border-dark">
            <Layout>
                <div className="my-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                    {navlinks.map((section) => (
                        <div
                            className="px-4 mt-8  lg:mt-0"
                            key={"footer-" + section.title}
                        >
                            <h2 className="text-main text-lg font-bold mb-4">
                                {section.title}
                            </h2>
                            <ul className="flex flex-col gap-2">
                                {section.links ? (
                                    section.links.map((link) => (
                                        <li key={"footerlink-" + link.title}>
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
            </Layout>
        </nav>
    );
};
