"use client";

import { useSession } from "next-auth/react";
import { FC } from "react";


export const SessionComp: FC<{}> = () => {
    const {data: session, status} = useSession();
    console.log(session);
    return (
        <div className="absolute bottom-0 left-0 text-black">
            <p>{session?.user.email}</p>
            <p>{session?.user.role}</p>
        </div>
    );
}