import { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="h-full flex justify-center items-center">
            <div className="h-full w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] px-4 md:px-0">
                {children}
            </div>
        </div>
    );
};
