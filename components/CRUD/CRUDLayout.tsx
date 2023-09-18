import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
import { CreateButton } from "./CreateButton";

interface CRUDLayoutProps {
    isAdmin?: boolean;
    children: ReactNode;
}

export const CRUDLayout: FC<CRUDLayoutProps> = ({
    isAdmin = false,
    children,
}) => {
    const path = usePathname();
    return (
        <>
            {isAdmin ? <CreateButton path={path} /> : null}
            {children}
        </>
    );
};
