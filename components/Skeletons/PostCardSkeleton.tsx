import { FC } from "react";
import MDCardSkeleton from "./MDCardSkeleton";
import { SMCardSkeleton } from "./SMCardSkeleton";
import { XLCardSkeleton } from "./XLCardSkeleton";

type PostCardSkeletonProps = {
    size?: string;
    withImage?: boolean;
};

export const PostCardSkeleton: FC<PostCardSkeletonProps> = ({
    size = "xl",
    withImage = true,
}) => {
    switch (size) {
        case "xl":
            return <XLCardSkeleton withImage={withImage} />;
        case "md":
            return <MDCardSkeleton withImage={withImage} />;
        case "sm":
            return <SMCardSkeleton withImage={withImage} />;
    }

    return <div>1</div>;
};
