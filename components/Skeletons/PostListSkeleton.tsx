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
        cardVariants: {
            little: "",
            big: "flex md:flex-row p-8 gap-8 min-h-[700px] md:min-h-[400px]",
        },
    },
    defaultVariants: {
        listVariants: "little",
    },
});

export const PostListSkeleton: FC<
    VariantProps<typeof postListSkeletonVariants>
> = ({ listVariants = "little", cardVariants = "little" }) => {
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
                        size={cardVariants}
                        key={"project-card-skeleton-" + item}
                    />
                ))}
            </CardList>
        </div>
    );
};
