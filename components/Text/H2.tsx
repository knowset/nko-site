import { FC, ReactNode } from "react";

interface H1Props {
    children: ReactNode;
    textsize?: string;
}

export const H2: FC<H1Props> = ({ children, textsize = "text-2xl" }) => {
    return (
        <h2 className="text-lg sm:text-xl">
            {children}
        </h2>
    );
};
