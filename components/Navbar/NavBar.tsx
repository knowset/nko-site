"use client";

import { navlinks } from "@/constants";
import { FC, useCallback, useState } from "react";
import React from "react";
import { NavLink } from "./NavLink";
import { DropDownMenu } from "../DDM/DropDownMenu";
import { MobileDropDownMenu } from "../DDM/MobileDropDownMenu";

export const NavBar: FC<{}> = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpen((current) => !current);
    }, []);

    return (
        <nav className="felx w-full py-4 border-t border-b bg-gray-100">
            <div className="w-full flex-grow flex sm:items-center sm:w-auto">
                <div className="w-full container mx-auto hidden md:flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-4 gap-8">
                    <NavLink title="Главная" href="/"/>
                    {navlinks.map((section) => (
                        // <Dropdown
                        //     key={"ddm-section-" + section.title}
                        //     section={section}
                        // />
                        <DropDownMenu
                            key={"ddm-section-" + section.title}
                            section={section}
                        />
                    ))}
                </div>
                <div className="w-full container mx-auto flex md:hidden flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-4">
                    <MobileDropDownMenu navlinks={navlinks} />
                </div>
            </div>
        </nav>
    );
};
