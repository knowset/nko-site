import Link from "next/link";
import { FC } from "react";

interface NavItemProps {
    item: {
        title: string;
        href: string;
    };
}

export const NavItem: FC<NavItemProps> = ({ item }) => {
    return (
        <Link
            key={item.title}
            href={item.href}
            className="hover:bg-gray-200 rounded py-2 px-4 mx-2 font-medium text-base"
        >
            {item.title}
        </Link>
    );
};
