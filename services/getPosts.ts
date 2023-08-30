import { getBaseURL } from "./getBaseURL";

type Props = {
    params: {
        id: string;
    };
};

type PostsResponse = {
    posts: any[];
};

export const getPosts = async (postType: string) => {
    try {
        const res = await fetch(`${getBaseURL()}/api/${postType}`);

        if (!res.ok) {
            throw new Error("Fail");
        }
        const data = await res.json();
        return data;
    } catch (err) {
        return { posts: [] };
    }
};

export async function getPostByID({ params }: Props, postType: string) {
    const res = await fetch(`${getBaseURL()}/api/${postType}/${params.id}`);
    const post = await res.json();

    return post;
}
