"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { FC, ReactNode } from "react";

const linkToFormVariants = cva("", {
    variants: {
        variant: {
            asButton:
                "flex items-center justify-center min-h-[3rem] px-6 py-3 w-full rounded font-semibold text-center text-white bg-main hover:bg-main-hover",
            asInlineText: "text-main hover:text-main-hover underline",
        },
    },
    defaultVariants: {
        variant: "asButton",
    },
});

type LinkToFormProps = {
    children: ReactNode;
} & VariantProps<typeof linkToFormVariants>;

export const LinkToForm: FC<LinkToFormProps> = ({ children, variant }) => {
    return (
        <Link
            target="_blank"
            href={"https://forms.gle/z6J1PNpcd1gDe8EW6"}
            className={cn(linkToFormVariants({ variant }))}
        >
            {children}
        </Link>
    );
};
