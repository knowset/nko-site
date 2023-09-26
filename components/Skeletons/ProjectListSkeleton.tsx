import { FC } from "react";
import { PostCardSkeleton } from "./PostCardSkeleton";

export const PostListSkeleton: FC<{}> = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 xl:grid-cols-3">
            {[
                ...Array(6)
                    .fill(null)
                    .map((_, i) => i + 1),
            ].map((item) => (
                <PostCardSkeleton key={"project-card-skeleton-" + item} />
            ))}
        </div>
    );
};
