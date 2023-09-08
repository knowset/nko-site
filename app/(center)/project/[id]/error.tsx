"use client"; // Error components must be Client Components

import { useEffect } from "react";

type ErrorProps = {
    errors: string;
    reset: () => void;
};

export default function Error({ errors, reset }: ErrorProps) {
    return (
        <div>
            <h2>
                {JSON.parse(errors).map((error: any) => (
                    <li>{error.message}</li>
                ))}
            </h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    );
}
