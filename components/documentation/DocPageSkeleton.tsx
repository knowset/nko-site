import { FC } from "react";
import { H1Skeleton } from "../Text/H1Skeleton";
import { H2Skeleton } from "../Text/H2Skeleton";
import { H2BigSkeleton } from "../Text/H2BigSkeleton";

export const DocPageSkeleton: FC<{}> = () => {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <H1Skeleton />
                <hr className="mt-4" />
            </div>
            <div className="flex flex-col gap-4">
                <H2Skeleton />
                <H2BigSkeleton />
                <H2Skeleton />
                <H2BigSkeleton />
                <H2Skeleton />
            </div>
        </div>
    );
};
