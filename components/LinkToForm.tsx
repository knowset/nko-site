import Link from "next/link";
import { FC, ReactNode } from "react";

type LinkToFormProps = {
    children: ReactNode;
};

export const LinkToForm: FC<LinkToFormProps> = ({ children }) => {
    const formUrl =
        typeof process.env.GOOGLE_FORM_URL === "string"
            ? process.env.GOOGLE_FORM_URL
            : "/";
    return (
        <Link
            href={formUrl}
            className="flex items-center justify-center min-h-[3rem] px-6 py-3 w-full rounded font-semibold text-center text-white bg-main hover:bg-main-hover"
        >
            {children}
        </Link>
    );
};
