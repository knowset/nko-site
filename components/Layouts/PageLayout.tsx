import { FC, ReactNode } from "react";
import { H1 } from "../Text/H1";

type PageLayoutProps = {
    children: ReactNode;
    pageName: string[];
};

export const PageLayout: FC<PageLayoutProps> = ({ children, pageName }) => {
    return (
        <div className="flex flex-col gap-10 mb-auto w-full">
            <div>
                <div className="flex flex-wrap gap-2 w-full">
                    <H1 size="big">
                        {pageName.map((item, index) => (
                            <>
                                {index === 0 ? null : (
                                    <span className="text-3xl lg:text-4xl font-semibold text-border-light dark:text-border-dark mx-2">
                                        /
                                    </span>
                                )}

                                {item}
                            </>
                        ))}
                    </H1>
                </div>
                <hr className="mt-4 border-border-light dark:border-border-dark" />
            </div>
            {children}
        </div>
    );
};
