"use client";

import { FaunadbPost, GeneralPostProps, Training } from "@/types";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { CardList } from "../CardList";
import { TrainingCard } from "./TrainingCard";

interface TrainingListProps {
    posts: FaunadbPost<Training>[];
}

export const TrainingList: FC<TrainingListProps> = ({ posts }) => {
    const { data: session } = useSession();
    const isAdmin = session?.user.role == "admin";

    return (
        <CardList>
            {posts.map((post) => (
                <TrainingCard
                    key={"training-card-" + post.data.id}
                    post={post}
                    isAdmin={isAdmin}
                />
            ))}
        </CardList>
    );
};
