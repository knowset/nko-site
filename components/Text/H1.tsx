import { FC, ReactNode } from "react";

interface H1Props {
    children: ReactNode;
    textsize?: string;
}

export const H1: FC<H1Props> = ({ children, textsize = "text-2xl" }) => {
    return (
        <h1 className={`${textsize} font-extrabold text-main`}>
            {children}
        </h1>
    );
};
