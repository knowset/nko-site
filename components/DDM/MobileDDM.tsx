"use client";

import React, { FC, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

interface DDMProps {
    navlinks: {
        title: string;
        links: { title: string; href: string }[];
    }[];
}

const MobileDDM: FC<DDMProps> = ({ navlinks }) => {
    
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className="hover:bg-gray-200 rounded py-2 px-4 mx-2 font-medium text-base focus-visible:outline-none pointer-events-auto select-none">
                Меню
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="bg-white act rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    onPointerDownOutside={() => console.log("ehre")}
                    sideOffset={5}
                >
                    <div className="grid grid-cols-2 gap-2 py-4 max-w-[94vw]">
                        {navlinks.map((section) => (
                            <DropdownMenu.Item
                                key={"ddm-section-" + section.title}
                                className="px-2 focus-visible:outline-none"
                                
                            >
                                <h1 className="px-2 pb-2 text-blue-500 select-none">
                                    {section.title}
                                </h1>
                                {section.links.map((link) => (
                                    <Link
                                        key={"ddm-link-" + link.title}
                                        href={link.href}
                                        className=" flex items-start rounded-lg p-2 hover:bg-gray-50"
                                    >
                                        <p className="text-base font-medium text-gray-900 break-words select-none">
                                            {link.title}
                                        </p>
                                    </Link>
                                ))}
                                {/* <Link
                                    href={link.href}
                                    className=" flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                    <p className="text-base font-medium text-gray-900 break-words">
                                        {link.title}
                                    </p>
                                </Link> */}
                            </DropdownMenu.Item>
                        ))}
                    </div>

                    <DropdownMenu.Arrow className="fill-white" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default MobileDDM;
