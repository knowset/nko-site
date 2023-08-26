"use client";

import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import Link from "next/link";

interface NavItemProps {
    title: string;
    href: string;
}

export const NavItem: FC<NavItemProps> = ({ title, href }) => {
    const path = usePathname();
    return (
        <Link
            href={href}
            className="flex group lg:hover:bg-gray-100 rounded py-1 md:py-2 md:px-4 font-medium text-base"
        >
            <p
                className={` bg-gradient-to-r from-blue-400 to-blue-400 ${
                    path == href
                        ? "bg-[length:100%_2px]"
                        : "bg-[length:0px_0px]"
                } bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]`}
            >
                {title}
            </p>
        </Link>
    );
};
