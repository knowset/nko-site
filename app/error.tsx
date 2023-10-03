"use client"; // Error components must be Client Components

import { ErrorField } from "@/types";
import { useRouter } from "next/navigation";

export default function Error({
    error,
    reset,
}: {
    error: ErrorField[];
    reset: () => void;
}) {
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-main text-center">Что-то пошло не так</h1>
            <button className="text-xl underline"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => router.back()
                }
            >
                Вернуться назад?
            </button>
        </div>
    );
}
