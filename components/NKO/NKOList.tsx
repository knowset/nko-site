"use client";

import { FaunadbPost, GeneralPostProps, NKO } from "@/types";
import { useSession } from "next-auth/react";
import { FC } from "react";
import { CRUDLayout } from "../CRUD/CRUDLayout";
import { NKOCard } from "./NKOCard";

interface NKOListProps {
    posts: FaunadbPost<NKO & GeneralPostProps>[];
}

export const NKOList: FC<NKOListProps> = ({ posts }) => {
    const { data: session } = useSession();
    const isAdmin = session?.user.role == "admin";

    return (
        <CRUDLayout isAdmin={isAdmin}>
            {
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-4 xl:grid-cols-3">
                    {posts &&
                        posts.map((post) => (
                            <NKOCard
                                key={post.data.id}
                                post={post}
                                isAdmin={isAdmin}
                            />
                        ))}
                </div>
            }
        </CRUDLayout>
    );
};
