import { getAllPosts } from "@/faunadb/functions";
import { notFound } from "next/navigation";
import { FC } from "react";
import { PostList } from "./PostList";

type Props = {
    postType: string;
};

type PostListProps = {
    ref: any;
    ts: any;
    data: {
        id: string;
        title: string;
        text: string;
        images: string;
        date: string;
    };
}[]

const GeneralFeed = async ({ postType }: Props) => {
    const posts = await getAllPosts(postType);
    if (!posts || !posts.data) return notFound();
    return <PostList posts={posts.data}/>;
};

export default GeneralFeed;
