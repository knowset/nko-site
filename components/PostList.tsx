"use client";

import { Post } from "@/components/Post";
import { PostItem } from "@/types/post";
import { FC, useEffect, useState } from "react";
import { AdminCreateButton } from "./AdminCreateButton";
import { PostListSkeleton } from "./PostListSkeleton";

type ReturnedData = {
    posts: {
        ref: any;
        ts: any;
        data: {
            id: string;
            title: string;
            text: string;
            images: string;
            date: string;
        };
    }[];
};

interface PostListProps {
    postType: string;
}

export const PostList: FC<PostListProps> = ({ postType }) => {
    const [posts, setPosts] = useState<PostItem[]>([]);
    const [loading, setLoading] = useState(true);

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
    });

    return (
        <div>
            <AdminCreateButton />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 lg:grid-cols-3">
                {loading && <PostListSkeleton />}
                {posts &&
                    posts.map((post) => (
                        <Post key={post.data.id} post={post.data} />
                    ))}
            </div>
        </div>
    );
};
