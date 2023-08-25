"use client";

import React, { FC, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useComponentVisible } from "@/hooks/handleHideDropdown";

interface DDMProps {
    section: {
        title: string;
        links: { title: string; href: string }[];
    };
}

const DropdownMenuDemo: FC<DDMProps> = ({ section }) => {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);
    return (
        <DropdownMenu.Root open={isComponentVisible}>
            <DropdownMenu.Trigger
                onClick={setIsComponentVisible}
                className="hover:bg-gray-200 rounded py-2 px-4 mx-2 font-medium text-base focus-visible:outline-none z-[100] pointer-events-auto"
            >
                <p ref={ref}>{section.title}</p>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal className="z-40">
                <DropdownMenu.Content
                    className="bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                >
                    <div className="flex flex-col gap-4 py-4 min-w-[20rem]">
                        {section.links.map((link) => (
                            <DropdownMenu.Item
                                key={"ddm-link-" + link.title}
                                className="px-2 focus-visible:outline-none"
                                onClick={setIsComponentVisible}
                            >
                                <Link
                                    href={link.href}
                                    className=" flex items-start rounded-lg p-3 hover:bg-gray-50"
                                >
                                    <p className="text-base font-medium text-gray-900 break-words">
                                        {link.title}
                                    </p>
                                </Link>
                            </DropdownMenu.Item>
                        ))}
                    </div>

                    <DropdownMenu.Arrow className="fill-white" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default DropdownMenuDemo;
