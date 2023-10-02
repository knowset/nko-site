"use client";

import { FaunadbPost, SuccessStory } from "@/types";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { CardList } from "../CardList";
import { SuccessStoryCard } from "./SuccesStoryCard";

interface SuccessStoryListProps {
    posts: FaunadbPost<SuccessStory>[];
}

export const SuccessStoryList: FC<SuccessStoryListProps> = ({ posts }) => {
    const { data: session } = useSession();
    const isAdmin = session?.user.role == "admin";

    return (
        <CardList isDynamicPage>
            {posts.map((post) => (
                <SuccessStoryCard
                    key={"partner-card-" + post.data.id}
                    isAdmin={isAdmin}
                    post={post}
                />
            ))}
        </CardList>
    );
};
