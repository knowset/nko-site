import { additionalNavbarLinks, navbarLinks } from "@/constants";
import Link from "next/link";
import { FC, useCallback, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { DropDownMenu } from "./DropDownMenu";
import { NavItem } from "./NavItem";



export const NavBar: FC<{}> = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpen((current) => !current);
    }, []);

    return (
        <nav className="felx w-full py-4 border-t border-b bg-gray-100">
            <div
                className="w-full flex-grow flex sm:items-center sm:w-auto"
            >
                <div className="w-full container mx-auto hidden md:flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    {navbarLinks.map((item) => (
                        <NavItem key={item.title} item={item} />
                    ))}
                    <div>
                        <DropDownMenu title="Центр" itemsArray={[{title: "", items: additionalNavbarLinks}]} />
                    </div>
                </div>
                <div className="w-full container mx-auto flex md:hidden flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
                    <DropDownMenu title="Меню" itemsArray={[{items: navbarLinks}, {title: "Центр", items: additionalNavbarLinks}]}/>
                </div>
            </div>
        </nav>
    );
};
