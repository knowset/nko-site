import { Inter } from "next/font/google";
import { Post } from "@/components/Post";

import { posts } from "@/constants";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";


export default async function Home() {

    return (
        <main className="pt-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3">
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </main>
    );
}
