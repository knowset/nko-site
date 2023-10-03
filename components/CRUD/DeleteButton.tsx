"use client";

import { cn } from "@/lib/utils";
import { FaunadbPost } from "@/types";
import { cva, VariantProps } from "class-variance-authority";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const deleteButtonVariants = cva(
    "bg-red-500 hover:bg-red-700 flex justify-center items-center text-white text-xl rounded  transition-all duration-200",
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

type DeleteButtonProps = {
    post: FaunadbPost<any>;
    redirectPath: string;
    apiPath: string;
    isPostDetail?: boolean;
} & VariantProps<typeof deleteButtonVariants>;

export const DeleteButton: FC<DeleteButtonProps> = ({
    post,
    redirectPath,
    apiPath,
    size,
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = async () => {
        setIsLoading(true);
        const res = await fetch(`/api/${apiPath}/delete`, {
            method: "POST",
            body: JSON.stringify(post),
        });
        router.push(redirectPath);
        setIsLoading(false);
    };

    return (
        <div>
            <button
                className={cn(deleteButtonVariants({ size }))}
                onClick={handleClick}
            >
                {!isLoading ? (
                    <RxCross2 />
                ) : (
                    <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                )}
            </button>
        </div>
    );
};
