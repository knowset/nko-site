"use client";

import { FaunadbPost, Project as ProjectType } from "@/types";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { CRUDLayout } from "../CRUD/CRUDLayout";
import { Project } from "./Project";

interface ProjectListProps {
    posts: FaunadbPost<ProjectType>[];
}

export const ProjectList: FC<ProjectListProps> = ({ posts }) => {
    const { data: session } = useSession();
    const isAdmin = session?.user.role == "admin";

    return (
        <CRUDLayout isAdmin={isAdmin}>
            {
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 xl:grid-cols-3">
                    {posts &&
                        posts.map((post) => (
                            <Project
                                key={post.data.id}
                                post={post}
                                isAdmin={isAdmin}
                            />
                        ))}
                </div>
            }
        </CRUDLayout>
    );
};
