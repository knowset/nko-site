"use client";

import { navlinks } from "@/constants";
import { FC, useEffect, useState } from "react";
import React from "react";
import { NavLink } from "../NavLink";
import { DropDownMenu } from "../DropDownMenu";
import { usePathname } from "next/navigation";
import { GlobalLayout } from "../Layouts/GlobalLayout";
import { ModeToogle } from "../ModeToggle";
import { AlignJustify } from "lucide-react";
import { Button } from "../Button";

const TOP_OFFSET = 90;

export const NavBar: FC<{}> = () => {
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const path = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setIsNavbarFixed(true);
            } else {
                setIsNavbarFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [TOP_OFFSET]);

    return (
        <>
            {isNavbarFixed && <div className="w-full h-[90px]"></div>}
            <nav
                className={`h-[90px] ${
                    isNavbarFixed
                        ? "top-0 fixed border-t-secondary-light dark:border-t-secondary-dark"
                        : ""
                } flex justify-center items-center w-full border-t border-b bg-secondary-light dark:bg-secondary-dark border-border-light dark:border-border-dark z-50`}
            >
                <div className="2xs:w-[96%] xs:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] px-4 md:px-0">
                    <div className="hidden md:flex md:flex-row justify-between items-center w-full">
                        <div className="flex flex-row items-center justify-start text-sm font-bold mt-0 py-4 gap-8">
                            <NavLink href="/" isActive={path === "/"}>
                                Главная
                            </NavLink>
                            {navlinks.map((section) => (
                                <DropDownMenu
                                    key={"ddm-section-" + section.title}
                                >
                                    <DropDownMenu.Trigger
                                        key={"ddm-trigger-" + section.title}
                                    >
                                        <Button
                                            type="button"
                                            aria-expanded="false"
                                            variant={"asLink"}
                                        >
                                            {section.title}
                                        </Button>
                                    </DropDownMenu.Trigger>
                                    <DropDownMenu.Content>
                                        <div className="flex flex-col gap-3 px-4 py-2 overflow-hidden rounded-lg shadow-lg border border-border-light border-border-dark bg-primary-light dark:bg-primary-dark">
                                            {!!section.links ? (
                                                section.links?.map((link) => (
                                                    <NavLink
                                                        key={
                                                            "ddm-link-" +
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
                                    </DropDownMenu.Content>
                                </DropDownMenu>
                            ))}
                        </div>
                        <ModeToogle />
                    </div>
                    {/* Mobile NavBar*/}
                    <div className="h-full flex md:hidden items-center justify-between text-sm font-bold mt-0">
                        <DropDownMenu variant="fixedLeft">
                            <DropDownMenu.Trigger>
                                <div className="h-12 w-12 md:h-8 md:w-8 flex justify-center items-center border rounded-lg border-border-light dark:border-border-dark hover:border-black hover:dark:border-white transition-all duration-300">
                                    <AlignJustify className="h-[1.5rem] w-[1.5rem] rotate-0 transition-all" />
                                </div>
                            </DropDownMenu.Trigger>
                            <DropDownMenu.Content>
                                <GlobalLayout>
                                    <div className="grid grid-cols-2 gap-2 rounded-lg shadow-lg border border-border-light border-border-dark bg-primary-light dark:bg-primary-dark p-2">
                                        {navlinks.map((section) => (
                                            <div
                                                key={
                                                    "mddm-section-" +
                                                    section.title
                                                }
                                                className="flex flex-col gap-1 p-2"
                                            >
                                                <p className="text-main mb-1">
                                                    {section.title}
                                                </p>
                                                {!!section.links ? (
                                                    section.links.map(
                                                        (link) => (
                                                            <NavLink
                                                                key={
                                                                    "mddm-link-" +
                                                                    link.title
                                                                }
                                                                href={link.href}
                                                                isActive={
                                                                    path ===
                                                                    link.href
                                                                }
                                                            >
                                                                {link.title}
                                                            </NavLink>
                                                        )
                                                    )
                                                ) : (
                                                    <p className="rounded py-1 md:py-2 md:px-4 font-medium text-base text-zinc-500">
                                                        Раздел появится в
                                                        ближайшее время
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                        <div className="flex flex-col gap-1 p-2">
                                            <p className="text-main mb-1">
                                                Другое
                                            </p>
                                            <NavLink href="/">Главная</NavLink>
                                        </div>
                                    </div>
                                </GlobalLayout>
                            </DropDownMenu.Content>
                        </DropDownMenu>
                        <ModeToogle variant="right" />
                    </div>
                </div>
            </nav>
        </>
    );
};
