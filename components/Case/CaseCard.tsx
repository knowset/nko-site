"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { DeleteButton } from "../CRUD/DeleteButton";
import { EditButton } from "../CRUD/EditButton";
import { FaunadbPost, Case } from "@/types";
import { Card } from "../Card";
import { H2 } from "../Text/H2";
import { LinkToFile } from "../LinkToFile";

export type CaseCardProps = {
    post: FaunadbPost<Case>;
    isAdmin?: boolean;
};

export const CaseCard: FC<CaseCardProps> = ({ post, isAdmin = false }) => {
    const path = usePathname();

    return (
        <Card className="flex md:flex-row p-8 gap-8" height="sm">
            <Card.Content className="flex flex-col justify-between h-full w-full">
                <div className="flex flex-col w-full gap-4 text-left">
                    <LinkToFile
                        text={post.data.title}
                        href={post.data.google_file_id}
                        fileFormat=".pdf"
                        className="text-main text-xl font-bold leading-6 inline-block underline"
                    />
                    <H2>
                        <span className="font-semibold">Заказчик:{" "}</span>
                        {post.data.customer}
                    </H2>
                    <H2>{post.data.description}</H2>
                </div>
                {isAdmin ? (
                    <div className="w-full flex justify-end">
                        <div className="flex gap-2">
                            <EditButton id={post.data.id} path={path} />
                            <DeleteButton
                                post={post}
                                redirectPath={path}
                                apiPath="case"
                            />
                        </div>
                    </div>
                ) : null}
            </Card.Content>
        </Card>
    );
};
