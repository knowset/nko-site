"use client"; // Error components must be Client Components

import { ErrorField } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: ErrorField[];
    reset: () => void;
}) {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-4xl">Что-то пошло не так</h2>
            <button className=""
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => router.back()
                }
            >
                Вернуться назад
            </button>
        </div>
    );
}
