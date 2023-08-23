import { AdminCreateButton } from "@/components/AdminCreateButton";
import GeneralFeed from "@/components/GeneralFeed";
import { PostList } from "@/components/PostList";
import { getAllPosts } from "@/faunadb/functions";
import { useRouter } from "next/router";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const runtime = "nodejs";

export default async function SuccessStories() {
    return (
        <Suspense fallback={<p>loading feed...</p>}>
            <main className="">
                <AdminCreateButton />
                <GeneralFeed key="success_stories" postType="success_stories" />
            </main>
        </Suspense>
    );
}
