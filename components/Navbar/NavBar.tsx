"use client";

import { navlinks } from "@/constants";
import { FC, useState } from "react";
import React from "react";
import { NavLink } from "./NavLink";
import { DropDownMenu } from "../DropDownMenu";
import { usePathname } from "next/navigation";
import { Layout } from "../Layout";
import { ModeToogle } from "../ModeToggle";
import { RxHamburgerMenu } from "react-icons/rx";

const mobileTriggerButton = (
    <div className="h-12 w-12 md:h-8 md:w-8 flex justify-center items-center border rounded-md dark:border-zinc-600 hover:bg-gray-200 hover:dark:bg-zinc-600">
        <RxHamburgerMenu className="h-[1.5rem] w-[1.5rem] rotate-0 transition-all" />
    </div>
);

export const NavBar: FC<{}> = () => {
    const path = usePathname();
    return (
        <nav className="flex w-full py-4 border-t border-b bg-gray-100 dark:bg-zinc-700 dark:border-zinc-600">
            <Layout>
                <div className="flex justify-between items-center">
                    <div className="hidden md:flex md:flex-row justify-between items-center w-full">
                        <div className="flex flex-row items-center justify-start text-sm font-bold mt-0 py-4 gap-8">
                            <NavLink href="/" isActive={path === "/"}>
                                Главная
                            </NavLink>
                            {navlinks.map((section) => (
                                <DropDownMenu
                                    key={"ddm-section-" + section.title}
                                    title={section.title}
                                    triggerType="asLink"
                                >
                                    <div className="flex flex-col gap-3 px-4 py-2 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-zinc-800">
                                        {!!section.links ? (
                                            section.links?.map((link) => (
                                                <NavLink
                                                    key={
                                                        "ddm-link-" + link.title
                                                    }
                                                    href={link.href}
                                                    isActive={
                                                        path === link.href
                                                    }
                                                >
                                                    {link.title}
                                                </NavLink>
                                            ))
                                        ) : (
                                            <p className="rounded py-1 md:py-2 md:px-4 font-medium text-base text-zinc-500">
                                                Раздел появится в ближайшее
                                                время
                                            </p>
                                        )}
                                    </div>
                                </DropDownMenu>
                            ))}
                        </div>
                        <ModeToogle />
                    </div>
                </div>
                <div className="flex md:hidden items-center justify-between text-sm font-bold uppercase mt-0 py-2">
                    <DropDownMenu
                        title={mobileTriggerButton}
                        variant="fixedLeft"
                        contentWidth="mobile"
                    >
                        <Layout>
                            <div className="grid grid-cols-2 gap-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-zinc-800 p-2">
                                {navlinks.map((section) => (
                                    <div
                                        key={"mddm-section-" + section.title}
                                        className="flex flex-col gap-1 p-2"
                                    >
                                        <p className="text-main mb-1">
                                            {section.title}
                                        </p>
                                        {!!section.links ? (
                                            section.links.map((link) => (
                                                <NavLink
                                                    key={
                                                        "mddm-link-" +
                                                        link.title
                                                    }
                                                    href={link.href}
                                                    isActive={
                                                        path === link.href
                                                    }
                                                >
                                                    {link.title}
                                                </NavLink>
                                            ))
                                        ) : (
                                            <p className="rounded py-1 md:py-2 md:px-4 font-medium text-base text-zinc-500">
                                                Раздел появится в ближайшее
                                                время
                                            </p>
                                        )}
                                    </div>
                                ))}
                                <div className="flex flex-col gap-1 p-2">
                                    <p className="text-main mb-1">Другое</p>
                                    <NavLink href="/">Главная</NavLink>
                                </div>
                            </div>
                        </Layout>
                    </DropDownMenu>
                    <ModeToogle variant="right" />
                </div>
            </Layout>
        </nav>
    );
};
