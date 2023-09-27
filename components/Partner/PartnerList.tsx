"use client";

import { FaunadbPost, Partner } from "@/types";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { CardList } from "../CardList";
import { PartnerCard } from "./PartnerCard";

interface PartnerListProps {
    posts: FaunadbPost<Partner>[];
}

export const PartnerList: FC<PartnerListProps> = ({ posts }) => {
    const { data: session } = useSession();
    const isAdmin = session?.user.role == "admin";

    return (
        <CardList>
            {posts.map((post) => (
                <PartnerCard
                    key={"partner-card-" + post.data.id}
                    isAdmin={isAdmin}
                    post={post}
                />
            ))}
        </CardList>
    );
};
