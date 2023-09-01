"use client";

import { Project } from "@/components/Project/Project";
import { PostItem } from "@/types/post";
import { useSession } from "next-auth/react";
import { FC, useEffect, useState } from "react";
import { CRUDLayout } from "../CRUD/CRUDLayout";
import { ProjectListSkeleton } from "./ProjectListSkeleton";

type ReturnedData = {
    posts: {
        ref: any;
        ts: any;
        data: any;
    }[];
};

export const ProjectList: FC<{}> = () => {
    const [posts, setPosts] = useState<PostItem[]>([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();

    useEffect(() => {
        const retrievData = async () => {
            if (loading) {
                const res = await fetch(`/api/project`);

                if (!res) {
                    throw new Error("Невозможно получить посты");
                }

                const data: ReturnedData = await res.json();

                setLoading(false);
                if (!data || !data.posts) {
                    setPosts([]);
                }

                setPosts(data.posts);
            }
            setLoading(false);
        };
        retrievData();
    }, []);

    const isAdmin = session?.user.role == "admin";

    return (
        <CRUDLayout isAdmin={isAdmin}>
            {loading ? <ProjectListSkeleton /> : null}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 xl:grid-cols-3">
                {posts &&
                    posts.map((post) => (
                        <Project
                            key={post.data.id}
                            post={post.data}
                            isAdmin={isAdmin}
                        />
                    ))}
            </div>
        </CRUDLayout>
    );
};
