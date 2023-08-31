"use client";

import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import Link from "next/link";

interface NavItemProps {
    title: string;
    href: string;
}

export const NavLink: FC<NavItemProps> = ({ title, href }) => {
    const path = usePathname();
    return (
        <Link
            href={href}
            className="flex group font-medium text-base"
        >
            <p
                className={` bg-gradient-to-r from-[rgb(0,158,224)] to-[rgb(0,158,224)] ${
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
