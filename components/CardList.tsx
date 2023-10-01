"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import { CreateButton } from "./CRUD/CreateButton";

// mt-4 grid md:grid-cols-2 gap-8 sm:px-16 md:px-0 lg:px-8 2xl:px-24 - medium
const cardListVariants = cva("w-full grid grid-cols-1", {
    variants: {
        size: {
            little: "sm:grid-cols-2 gap-8 lg:gap-4 xl:grid-cols-3",
            medium: "md:grid-cols-2 gap-8 sm:px-16 md:px-0 lg:px-8 2xl:px-24",
            big: "grid-cols-1 gap-8"
        },
    },
    defaultVariants: {
        size: "little",
    },
});

type CardListProps = {
    children: ReactNode[];
    isDynamicPage?: boolean;
    className?: string;
} & VariantProps<typeof cardListVariants>;

export const CardList: FC<CardListProps> = ({
    children,
    isDynamicPage = true,
    size = "little",
    className = "",
}) => {
    const { data: session } = useSession();
    const path = usePathname();
    const isAdmin: boolean = session?.user.role === "admin";
    return (
        <>
            {isAdmin && isDynamicPage && <CreateButton path={path} />}
            <div
                className={cn(
                    cardListVariants({ className: className, size: size })
                )}
            >
                {children}
            </div>
        </>
    );
};
