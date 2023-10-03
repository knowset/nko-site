"use client";

import { FaunadbPost, EventForStudents } from "@/types";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { CardList } from "../CardList";
import { EventForStudentsCard } from "./EFSCard";

interface EventForStudentsListProps {
    posts: FaunadbPost<EventForStudents>[];
}

export const EventForStudentsList: FC<EventForStudentsListProps> = ({ posts }) => {
    const { data: session } = useSession();
    const isAdmin = session?.user.role == "admin";

    return (
        <CardList size="big" isDynamicPage>
            {posts.map((post) => (
                <EventForStudentsCard
                    key={"efs-card-" + post.data.id}
                    post={post}
                    isAdmin={isAdmin}
                />
            ))}
        </CardList>
    );
};
