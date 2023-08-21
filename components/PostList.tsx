"use client";

import { Post } from "@/components/Post";
import { fetcher } from "@/helpers";
import { FC } from "react";
import useSWR from "swr";

interface PostListProps {
    postType: string;
}


export const PostList: FC<PostListProps> = ({ postType }) => {
    const { data, isLoading } = useSWR("/api/project", fetcher);

    if (!data) {
        return <div>loading</div>
    }

    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3">
            {data.posts.map((post: {data:{ id: string; title: string; text: string }}) => (
                <Post key={post.data.id} post={post.data} />
            ))}
            {/* { posts.map((item: any) => console.log(item))} */}
        </div>
    );
};
