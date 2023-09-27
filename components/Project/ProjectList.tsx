"use client";

import { FaunadbPost, GeneralPostProps, Project } from "@/types";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { CardList } from "../CardList";
import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
    posts: FaunadbPost<Project & GeneralPostProps>[];
}

export const ProjectList: FC<ProjectListProps> = ({ posts }) => {
    const { data: session } = useSession();
    const isAdmin = session?.user.role == "admin";

    return (
        <CardList>
            {posts.map((post) => (
                <ProjectCard
                    key={"project-card-" + post.data.id}
                    post={post}
                    isAdmin={isAdmin}
                />
            ))}
        </CardList>
    );
};
