import { PostListSkeleton } from "@/components/Skeletons/PostListSkeleton";

export default function Loading() {
    return (
        <PostListSkeleton listVariants="big" cardSize="sm" withImage={false} />
    );
}
