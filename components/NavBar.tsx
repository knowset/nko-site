"use client";

import { additionalNavbarLinks, navbarLinks, navlinks } from "@/constants";
import Link from "next/link";
import { FC, useCallback, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { NavItem } from "./NavItem";
import React from "react";
import * as DDM from "@radix-ui/react-dropdown-menu";
import Dropdown from "./DDM/DropDownMenu";
import MobileDDM from "./DDM/MobileDDM";

export const NavBar: FC<{}> = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpen((current) => !current);
    }, []);

    return (
        <nav className="felx w-full py-4 border-t border-b bg-gray-100">
            <div className="w-full flex-grow flex sm:items-center sm:w-auto">
                <div className="w-full container mx-auto hidden md:flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                     {navlinks.map((section) => (
                        <Dropdown
                            key={"ddm-section-" + section.title}
                            section={section}
                        />
                    ))}
                </div>
                <div className="w-full container mx-auto flex md:hidden flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    <MobileDDM navlinks={navlinks}/>
                </div>
            </div>
        </nav>
    );
};
