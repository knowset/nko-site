"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface CreateButtonProps {
    path: string;
}

export const CreateButton: FC<CreateButtonProps> = ({ path }) => {
    return (
        <div className="w-full flex justify-center my-4">
            <Link
                href={`${path}/new`}
                className="bg-main hover:bg-main text-white p-4 rounded-xl font-semibold"
            >
                Создать статью
            </Link>
        </div>
    );
};
