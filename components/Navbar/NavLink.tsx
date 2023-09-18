"use client";

import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva(
    "bg-gradient-to-r from-[rgb(0,158,224)] to-[rgb(0,158,224)] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]",
    {
        variants: {
            variant: {
                default: "bg-[length:0px_0px]",
                active: "bg-[length:100%_2px]",
            },
            defaultVariants: {
                variant: "default",
            },
        },
    }
);

interface NavLinkProps extends VariantProps<typeof linkVariants> {
    title: string;
    href: string;
}

export const NavLink: FC<NavLinkProps> = ({ title, href }) => {
    const path = usePathname();
    return (
        <Link
            href={href}
            className="group font-medium text-base leading-snug"
            prefetch={false}
        >
            <span
                className={cn(
                    linkVariants({
                        variant: path === href ? "active" : "default",
                    })
                )}
            >
                {title}
            </span>
        </Link>
    );
};
