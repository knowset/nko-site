"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { FC } from "react";
import { AiFillEdit } from "react-icons/ai";

const editButtonVariants = cva(
    "bg-fuchsia-500 hover:bg-fuchsia-700 flex justify-center items-center text-white text-xl rounded transition-all duration-200",
    {
        variants: {
            size: {
                big: "w-16 h-16",
                medium: "w-12 h-12",
                little: "w-8 h-8",
            },
        },
        defaultVariants: {
            size: "little",
        },
    }
);

type EditButtonProps = {
    id: string;
    path: string;
} & VariantProps<typeof editButtonVariants>;

export const EditButton: FC<EditButtonProps> = ({ id, path, size }) => {
    return (
        <Link
            href={`${path}/edit/${id}`}
            className={cn(editButtonVariants({ size }))}
            prefetch={false}
        >
            <AiFillEdit />
        </Link>
    );
};
