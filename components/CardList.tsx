"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import { CreateButton } from "./CRUD/CreateButton";

type CardListProps = {
    children: ReactNode[];
    isDynamicPage?: boolean;
};

export const CardList: FC<CardListProps> = ({
    children,
    isDynamicPage = true,
}) => {
    const { data: session } = useSession();
    const path = usePathname();
    const isAdmin: boolean = session?.user.role === "admin";
    return (
        <>
            {isAdmin && isDynamicPage && <CreateButton path={path} />}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4 xl:grid-cols-3">
                {children}
            </div>
        </>
    );
};
