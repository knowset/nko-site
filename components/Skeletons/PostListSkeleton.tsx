import { FC } from "react";
import { CardList } from "../CardList";
import { PostCardSkeleton } from "./PostCardSkeleton";

export const PostListSkeleton: FC<{}> = () => {
    return (
        <div className="flex flex-col gap-10 mb-auto w-full">
            <div>
                <div className="w-full h-12 bg-secondary-light dark:bg-secondary-dark rounded-md animate-pulse"></div>
                <hr className="mt-4 border-border-light dark:border-border-dark" />
            </div>
            <CardList>
                {[
                    ...Array(6)
                        .fill(null)
                        .map((_, i) => i + 1),
                ].map((item) => (
                    <PostCardSkeleton key={"project-card-skeleton-" + item} />
                ))}
            </CardList>
        </div>
    );
};
