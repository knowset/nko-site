"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const AdminCreateButton: FC<{}> = () => {
    const { data: session } = useSession();
    const path = usePathname();
    
    return (
        <>
            {session?.user.role == "admin" && (
                <div className="w-full flex justify-center my-4">
                    <Link href={`${path}/new`} className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-xl font-semibold">Создать статью</Link>
                </div>
            )}
        </>
    );
};
