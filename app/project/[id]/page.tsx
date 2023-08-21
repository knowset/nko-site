"use client";

import { PostDetail } from "@/components/PostDetail";
import { fetcher } from "@/helpers";
import useSWR from "swr";
// async function getData(id: number) {
//     const res = posts.find((post) => post.id == id);
//     return res;
// }

export default function Project({
    params: { id },
}: {
    params: { id: string };
}) {
    return (
        <main>
            <PostDetail postId={id}/>
        </main>
    );
}
