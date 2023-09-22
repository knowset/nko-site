import { FC } from "react";
import { ProjectCardSkeleton } from "@/components/Project/ProjectCardSkeleton";

export const ProjectListSkeleton: FC<{}> = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 xl:grid-cols-3">
            {[
                ...Array(6)
                    .fill(null)
                    .map((_, i) => i + 1),
            ].map((item) => (
                <ProjectCardSkeleton key={"project-card-skeleton-" + item} />
            ))}
        </div>
    );
};
