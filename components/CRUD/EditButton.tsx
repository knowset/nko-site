"use client";

import Link from "next/link";
import { FC } from "react";
import { AiFillEdit } from "react-icons/ai";
interface EditButtonProps {
    id: string;
    path: string;
    isPostDetail?: boolean;
}

export const EditButton: FC<EditButtonProps> = ({ id, path, isPostDetail = false }) => {

    return (
        <div>
            <Link
                href={`${path}/edit?p=${id}`}
                className={`bg-fuchsia-500 hover:bg-fuchsia-700 ${isPostDetail ? "h-16 w-16" : "h-8 w-8"} flex justify-center items-center text-white text-xl rounded`}
            >
                <AiFillEdit />
            </Link>
        </div>
    );
};
