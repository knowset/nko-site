import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { CardList } from "../CardList";
import { PostCardSkeleton } from "./PostCardSkeleton";

const postListSkeletonVariants = cva("", {
    variants: {
        listVariants: {
            little: "",
            medium: "",
            big: "",
        },
    },
    defaultVariants: {
        listVariants: "little",
    },
});

type PostListSkeletonProps = {
    withImage?: boolean;
    cardSize?: string;
} & VariantProps<typeof postListSkeletonVariants>;

export const PostListSkeleton: FC<PostListSkeletonProps> = ({
    listVariants = "little",
    cardSize = "xl",
    withImage = true,
}) => {
    return (
        <div className="flex flex-col gap-10 mb-auto w-full">
            <div>
                <div className="w-full h-12 bg-secondary-light dark:bg-secondary-dark rounded-md animate-pulse"></div>
                <hr className="mt-4 border-border-light dark:border-border-dark" />
            </div>
            <CardList size={listVariants}>
                {[
                    ...Array(6)
                        .fill(null)
                        .map((_, i) => i + 1),
                ].map((item) => (
                    <PostCardSkeleton
                        withImage={withImage}
                        size={cardSize}
                        key={"post-card-skeleton-" + item}
                    />
                ))}
            </CardList>
        </div>
    );
};
