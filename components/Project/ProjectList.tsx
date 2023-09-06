"use client";

import {
    ErrorField,
    FaunadbPost,
    FaunadbPostsOrError,
    Project as ProjectType,
} from "@/types";
import { connectors } from "googleapis/build/src/apis/connectors";
import { useSession } from "next-auth/react";
import { FC, useEffect, useState } from "react";
import { CRUDLayout } from "../CRUD/CRUDLayout";
import { Project } from "./Project";
import { ProjectListSkeleton } from "./ProjectListSkeleton";

export const ProjectList: FC<{}> = () => {
    const [posts, setPosts] = useState<FaunadbPost<ProjectType>[]>([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState<ErrorField[] | null>(null);
    const { data: session } = useSession();

    useEffect(() => {
        const retrievData = async () => {
            if (loading) {
                const res = await fetch(`/api/project`);

                if (!res) {
                    throw new Error("Невозможно получить посты");
                }

                const data: FaunadbPostsOrError<ProjectType> = await res.json();
                setLoading(false);
                if (data.errors) {
                    setErrors(data.errors);
                    return;
                }
                if (!data || !data.posts) {
                    setPosts([]);
                    return;
                }

                setPosts(data.posts);
            }
            setLoading(false);
        };
        retrievData();
    }, [posts]);

    const isAdmin = session?.user.role == "admin";

    return (
        <CRUDLayout isAdmin={isAdmin}>
            {loading ? <ProjectListSkeleton /> : null}
            {!!errors ? <div>
                <ul className="text-2xl">
                    {errors.map((error) => (
                        <li>{error.message}</li>
                    ))}
                </ul>
            </div> : null}
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
