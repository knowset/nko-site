"use client";

import { Post } from "@/components/Post";
import { PostItem } from "@/types/post";
import { useSession } from "next-auth/react";
import { FC, useEffect, useState } from "react";
import { CRUDLayout } from "./CRUD/CRUDLayout";
import { PostListSkeleton } from "./PostListSkeleton";

type ReturnedData = {
    posts: {
        ref: any;
        ts: any;
        data: any
    }[];
};

interface PostListProps {
    postType: string;
}

export const PostList: FC<PostListProps> = ({ postType }) => {
    const [posts, setPosts] = useState<PostItem[]>([]);
    const [loading, setLoading] = useState(true);
    const {data: session} = useSession();

    useEffect(() => {
        const retrievData = async () => {
            if (loading) {
                const res = await fetch(`/api/${postType}`);

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
    }, [posts, loading]);

    const isAdmin = session?.user.role == "admin";

    return (
        <div>
            <CRUDLayout isAdmin={isAdmin}>
                {loading ? <PostListSkeleton /> : null}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 lg:grid-cols-3">
                    {posts &&
                        posts.map((post) => (
                            <Post key={post.data.id} post={post.data} isAdmin={isAdmin} />
                        ))}
                </div>
            </CRUDLayout>
        </div>
    );
};
