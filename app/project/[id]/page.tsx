import { posts } from "@/constants";

async function getData(id: number) {
    const res = posts.find((post) => post.id == id);
    return res;
}

export default async function Post({
    params: { id },
}: {
    params: { id: number };
}) {
    const post = await getData(id);

    return (
        <>
            <h1>{post?.title}</h1>
            <p>{post?.text}</p>
        </>
    );
}
