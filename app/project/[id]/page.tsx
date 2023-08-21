// "use client";

import { PostDetail } from "@/components/PostDetail";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { Metadata, ResolvingMetadata } from "next";
// import { useState } from "react";

type Props = {
    params: { id: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.id;

    const post = await fetch(`${getBaseUrl()}/api/project/${id}`).then((res) =>
        res.json()
    );

    return {
        title: "title",
        referrer: "origin-when-cross-origin",
    };
}

const Project = async ({ params }: Props) => {
    const res = await fetch(`${getBaseUrl()}/api/project/${params.id}`);
    const data = await res.json();
    // const [post, setPost] = useState({});
    // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     try {
    //         if (isLoading) {
    //             const retrieveData = async () => {
    //                 const res = await fetch(
    //                     `${getBaseUrl()}/api/project/${params.id}`
    //                 );
    //                 const data = await res.json();

    //                 setIsLoading(false);
    //                 if (!data) {
    //                     throw new Error("No data");
    //                 }

    //                 if (!data.post) {
    //                     throw new Error("No data");
    //                 }

    //                 setPost(data.post);
    //             };
    //             retrieveData();
    //         }
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }, [params]);

    // if (isLoading) return <div>loading</div>;

    // if (!post) return <div>loading...</div>;

    // return <PostDetail post={(post as any)}/>;

    // console.log(post);
    console.log("DATA: ", data);
    const post: {id: string; title: string; text: string} = data.post; 
    console.log("DATA: ", post);
    return <PostDetail key={post.id} post={post as any} />;
    return <div>PARAMS</div>;
};

export default Project;
