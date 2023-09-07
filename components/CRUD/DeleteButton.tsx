"use client";

import { FaunadbPost } from "@/types";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

interface DeleteButtonProps {
    post: FaunadbPost<any>;
    path: string;
    isPostDetail?: boolean;
}

export const DeleteButton: FC<DeleteButtonProps> = ({
    post,
    path,
    isPostDetail = false,
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = async () => {
        setIsLoading(true);
        const res = await fetch(`/api${path}/delete`, {
            method: "POST",
            body: JSON.stringify(post),
        });
        router.push(path);
        setIsLoading(false);
    };

    return (
        <div>
            <button
                className={`bg-red-500 hover:bg-red-700 ${
                    isPostDetail ? "h-16 w-16" : "h-8 w-8"
                } flex justify-center items-center text-white text-xl rounded`}
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
