import { PostDetail } from "@/components/PostDetail";
import { getBaseURL } from "@/helpers";
import { Metadata, ResolvingMetadata } from "next";
// import { useState } from "react";

export const dynamicParams = true;

type Props = {
    params: { id: string };
};

async function getPostByID({ params }: Props) {
    const res = await fetch(`${getBaseURL()}/api/project/${params.id}`);
    const post = await res.json();

    return post;
}

export default async function Project({ params }: Props) {
    const post = await getPostByID({params});

    return <div>{JSON.stringify(post)}</div>
}
