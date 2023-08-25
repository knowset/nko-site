import { FC, ReactNode } from "react";

interface NavItemProps {
    children: ReactNode;
}

export const NavItem: FC<NavItemProps> = ({ children }) => {
    return (
        <button
            className="hover:bg-gray-200 rounded py-2 px-4 mx-2 font-medium text-base"
        >
            {children}
        </button>
    );
};
