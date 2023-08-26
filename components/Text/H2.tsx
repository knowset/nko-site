import { FC, ReactNode, AllHTMLAttributes } from "react";

interface H2Props {
    children: ReactNode;
    textsize?: string;
}

export const H2: FC<H2Props> = ({ children, textsize = "text-2xl"}) => {
    return (
        <h2 className="text-lg sm:text-xl">
            {children}
        </h2>
    );
};
