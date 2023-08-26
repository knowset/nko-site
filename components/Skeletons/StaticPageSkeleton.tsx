import { FC } from "react";
import { H1Skeleton } from "../Text/H1Skeleton";

interface SPSProps {
    height?: string;
}

export const StaticPageSkeleton: FC<SPSProps> = ({ height = "h-[40rem]" }) => {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <H1Skeleton />
                <hr className="mt-4" />
            </div>
            <div className={`animate-pulse w-full ${height} bg-zinc-200 rounded-lg`}>
            </div>
        </div>
    );
};