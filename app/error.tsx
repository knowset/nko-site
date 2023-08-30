"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

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
