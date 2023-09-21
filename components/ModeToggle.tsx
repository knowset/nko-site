"use client";

import { useTheme } from "next-themes";
import { FC, ReactNode } from "react";
import { DropDownMenu } from "./DropDownMenu";
import { BsMoon, BsSun } from "react-icons/bs";
import { Button } from "./Button";
import { cva, VariantProps } from "class-variance-authority";

const modeToggleVariants = cva("", {
    variants: {
        variant: {
            default: "",
            right: "",
        },
        defaultVariants: {
            variant: "default",
        },
    },
});

export const ModeToogle: FC<VariantProps<typeof modeToggleVariants>> = ({
    variant = "default",
}) => {
    const { setTheme } = useTheme();

    const title = (
        <div className="h-12 w-12 md:h-8 md:w-8 flex justify-center items-center border rounded-md dark:border-zinc-600 hover:bg-gray-200 hover:dark:bg-zinc-600">
            <BsSun className="h-[1.5rem] w-[1.5rem] rotate-0 transition-all dark:-rotate-90 dark:hidden" />
            <BsMoon className="h-[1.5rem] w-[1.5rem] rotate-90 transition-all dark:rotate-0 hidden dark:flex" />
        </div>
    );
    return (
        <DropDownMenu title={title} variant={variant}>
            <div className="flex flex-col gap-3 px-4 py-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-zinc-800">
                <Button onClick={() => setTheme("light")} variant="asLink">
                    Светлая
                </Button>
                <Button onClick={() => setTheme("dark")} variant="asLink">
                    Темная
                </Button>
                <Button onClick={() => setTheme("system")} variant="asLink">
                    Как на устройстве
                </Button>
            </div>
        </DropDownMenu>
    );
};
