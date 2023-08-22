import { AdminCreateButton } from "@/components/AdminCreateButton";
import { PostList } from "@/components/PostList";
import { getBaseURL } from "@/helpers";

const getPosts = async () => {
    try {
        const res = await fetch(`${getBaseURL()}/api/project`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Fail");
        }
        const data = await res.json();
        return data;
    } catch (err) {
        return null;
    }
};

export default async function Project() {
    const { posts } = await getPosts();
    return (
        <main className="">
            <AdminCreateButton />

            <PostList posts={posts} />
        </main>
    );
}
