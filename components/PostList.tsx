import { Post } from "@/components/Post";
import { FC } from "react";

interface PostListProps {
    posts: {
        ref: any;
        ts: any;
        data: {
            id: string;
            title: string;
            text: string;
        }
    }[]
}


export const PostList: FC<PostListProps> = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3">
            {posts.map((post) => (
                <Post key={post.data.id} post={post.data} />
            ))}
        </div>
    );
};
