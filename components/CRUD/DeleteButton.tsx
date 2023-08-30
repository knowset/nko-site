"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { RxCross2 } from "react-icons/rx";

interface DeleteButtonProps {
    id: string;
    path: string;
}

export const DeleteButton: FC<DeleteButtonProps> = ({ id, path }) => {
    const router = useRouter();
    const handleClick = async () => {
        const res = await fetch(`/api${path}/delete`, {
            method: "POST",
            body: JSON.stringify({ id: id }),
        });
        if (res) {
            router.refresh();
        }
    };

    return (
        <div>
            <button
                className="bg-red-500 hover:bg-red-700 h-8 w-8 flex justify-center items-center text-white text-xl rounded"
                onClick={handleClick}
            >
                <RxCross2 />
            </button>
        </div>
    );
};
