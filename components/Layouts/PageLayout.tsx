import { FC, ReactNode } from "react";
import { H1 } from "../Text/H1";

type PageLayoutProps = {
    children: ReactNode;
    pageName: string;
};

export const PageLayout: FC<PageLayoutProps> = ({ children, pageName }) => {
    return (
        <div className="flex flex-col gap-10 mb-auto w-full">
            <div>
                <H1 size="big">{pageName}</H1>
                <hr className="mt-4 border-border-light dark:border-border-dark" />
            </div>
            {children}
        </div>
    );
};
