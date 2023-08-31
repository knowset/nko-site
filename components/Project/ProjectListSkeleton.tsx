import { FC } from "react";
import { ProjectSkeleton } from "@/components/Project/ProjectSkeleton";

export const ProjectListSkeleton: FC<{}> = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:gap-4 xl:grid-cols-3">
            {[...Array(6).fill(null).map((_, i) => i + 1)].map((item) => (
                <ProjectSkeleton key={"postskeleton-"+ item} />
            ))}
        </div>
    );
};
