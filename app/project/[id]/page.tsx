import { PostDetail } from "@/components/PostDetail";
import { fetcher } from "@/helpers";
import { getAllPosts } from "@/services/getPosts";
import { GetServerSideProps, GetStaticPaths } from "next";
import useSWR from "swr";
// async function getData(id: number) {
//     const res = posts.find((post) => post.id == id);
//     return res;
// }

export type Repo = {
    id: string;
    title: string;
    text: string;
};

export async function generateStaticParams() {
    const res: { posts: any[] } = await getAllPosts();

    return res.posts.map((post: any) => ({
        slug: post.data.id,
    }));
}

export default function Project({ params }: { params: any }) {
    return <main>{params.id}</main>;
}
