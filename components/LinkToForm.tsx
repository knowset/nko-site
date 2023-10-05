"use client";

import Link from "next/link";
import { FC, ReactNode } from "react";

type LinkToFormProps = {
    children: ReactNode;
};

export const LinkToForm: FC<LinkToFormProps> = ({ children }) => {
    return (
        <Link
            target="_blank"
            href={"https://forms.gle/z6J1PNpcd1gDe8EW6"}
            className="flex items-center justify-center min-h-[3rem] px-6 py-3 w-full rounded font-semibold text-center text-white bg-main hover:bg-main-hover"
        >
            {children}
        </Link>
    );
};
