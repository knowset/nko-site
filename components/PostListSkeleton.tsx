import { FC } from "react";
import { PostSkeleton } from "@/components/PostSkeleton";

export const PostListSkeleton: FC<{}> = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 lg:grid-cols-3">
            {[...Array(6)].map((item) => (
                <PostSkeleton />
            ))}
        </div>
    );
};
