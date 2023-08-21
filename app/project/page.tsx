"use client";

import { AdminCreateButton } from "@/components/AdminCreateButton";
import { PostList } from "@/components/PostList";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {getBaseURL} from "@/helpers"

export default function Project() {
    const parm = useParams();
    console.log("PARM: ", parm);
    const path = usePathname();
    console.log("PATH: ", path);

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        try {
            if (isLoading) {
                const retrieveData = async () => {
                    const res = await fetch(`https://inciativa.netlify.app/api/project`);
                    const data = await res.json();

                    console.log(data);
                    setIsLoading(false);
                    if (!data) {
                        throw new Error("No data");
                    }

                    if (!data.posts) {
                        throw new Error("No data");
                    }

                    setPosts(data.posts);
                };
                retrieveData();
            }
        } catch (err) {
            console.error(err);
        }
    });

    if (isLoading) {
        return <div>loading</div>;
    }

    return (
        <main className="">
            <AdminCreateButton />
            <PostList posts={posts} />
        </main>
    );
}
