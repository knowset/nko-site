"use client";

import { FaunadbPost, Case } from "@/types";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { CardList } from "../CardList";
import { CaseCard } from "./CaseCard";

interface CaseListProps {
    posts: FaunadbPost<Case>[];
}

export const CaseList: FC<CaseListProps> = ({ posts }) => {
    const { data: session } = useSession();
    const isAdmin = session?.user.role == "admin";

    return (
        <CardList size="big" isDynamicPage>
            {posts.map((post) => (
                <CaseCard
                    key={"training-card-" + post.data.id}
                    post={post}
                    isAdmin={isAdmin}
                />
            ))}
        </CardList>
    );
};
