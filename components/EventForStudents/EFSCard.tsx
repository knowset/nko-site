"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DeleteButton } from "../CRUD/DeleteButton";
import { EditButton } from "../CRUD/EditButton";
import { FaunadbPost, EventForStudents } from "@/types";
import { Card } from "../Card";
import { H2 } from "../Text/H2";
import { LinkToForm } from "../LinkToForm";

export type EventForStudentsCardProps = {
    post: FaunadbPost<EventForStudents>;
    isAdmin?: boolean;
};

export const EventForStudentsCard: FC<EventForStudentsCardProps> = ({
    post,
    isAdmin = false,
}) => {
    const path = usePathname();

    return (
        <Card className="flex md:flex-row p-8 items-start" height="sm">
            <Card.Content className="flex flex-col justify-between w-full gap-4 text-left">
                <Link
                    href={post.data.site}
                    className="text-main hover:text-main-hover text-xl font-bold leading-6 underline"
                >
                    {post.data.title}
                </Link>
                <H2 className="font-bold">
                    До {post.data.end_of_the_implementation_period}
                </H2>
                <H2>{post.data.description}</H2>
                <div className="flex justify-between items-center gap-2">
                    <LinkToForm>
                        Связаться с нами для участия в конкурсе
                    </LinkToForm>
                    {isAdmin ? (
                        <div className="flex justify-end">
                            <div className="flex gap-2">
                                <EditButton
                                    id={post.data.id}
                                    path={path}
                                    size="medium"
                                />
                                <DeleteButton
                                    post={post}
                                    redirectPath={path}
                                    apiPath="case"
                                    size="medium"
                                />
                            </div>
                        </div>
                    ) : null}
                </div>
            </Card.Content>
        </Card>
    );
};
