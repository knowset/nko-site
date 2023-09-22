"use client";

import { useTheme } from "next-themes";
import { FC, ReactNode } from "react";
import { DropDownMenu } from "./DropDownMenu";
import { BsMoon, BsSun } from "react-icons/bs";
import { Button } from "./Button";
import { cva, VariantProps } from "class-variance-authority";
import { Moon, Sun } from "lucide-react";

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

    return (
        <DropDownMenu variant={variant}>
            <DropDownMenu.Trigger>
                <div className="h-12 w-12 md:h-10 md:w-10 flex justify-center items-center border rounded-lg border-border-light dark:border-border-dark lg:hover:border-black lg:hover:dark:border-white transition-all duration-300">
                    <Sun className="h-[1.5rem] w-[1.5rem] dark:hidden" />
                    <Moon className="h-[1.5rem] w-[1.5rem] hidden dark:flex" />
                </div>
            </DropDownMenu.Trigger>
            <DropDownMenu.Content>
                <div className="flex flex-col gap-3 px-4 py-2 rounded-lg shadow-lg border border-border-light border-border-dark bg-primary-light dark:bg-primary-dark">
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
            </DropDownMenu.Content>
        </DropDownMenu>
    );
};
