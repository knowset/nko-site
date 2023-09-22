"use client";

import { FC, useCallback, useState } from "react";
import { useSession } from "next-auth/react";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";

export const Header: FC<{}> = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = useCallback(() => {
        setShowMenu((current) => !current);
    }, []);

    const session = useSession();

    return (
        <>
            <Logo />
            <NavBar />
        </>
    );
};
