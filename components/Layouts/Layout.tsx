import { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    isContent?: boolean;
}

export const Layout: FC<LayoutProps> = ({ children, isContent = false }) => {
    return (
        <div
            className={`${
                isContent ? "flex-grow" : ""
            } h-full flex justify-center items-start w-full`}
        >
            <div className="h-full 2xs:w-[96%] xs:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] px-4 md:px-0">
                {children}
            </div>
        </div>
    );
};
