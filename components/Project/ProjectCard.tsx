"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DeleteButton } from "../CRUD/DeleteButton";
import { EditButton } from "../CRUD/EditButton";
import { FaunadbPost, Project } from "@/types";
import Image from "next/image";
import { Card } from "../Card";
import { BsArrowRight } from "react-icons/bs";
import { shortenTitle } from "@/lib/shortenTitle";

export type ProjectCardProps = {
    post: FaunadbPost<Project>;
    isAdmin?: boolean;
};

export const ProjectCard: FC<ProjectCardProps> = ({
    post,
    isAdmin = false,
}) => {
    const path = usePathname();

    const preview_url = `https://drive.google.com/thumbnail?id=${
        post.data.images_ids[0]
    }&sz=w${2000}-h${2000}`;

    const shortTitle: string = shortenTitle(post.data.title);

    return (
        <Card className="h-full">
            <Card.Image>
                <div className="relative w-full pb-[80%] rounded-t">
                    <Link href={`${path}/${post.data.id}`} className="w-full">
                        {post.data.images_ids.length > 0 ? (
                            <Image
                                className="absolute h-full w-full object-cover rounded-t"
                                src={preview_url}
                                alt=""
                                placeholder="blur"
                                blurDataURL={preview_url}
                                width={1000}
                                height={1000}
                            />
                        ) : (
                            <div className="flex justify-center items-center absolute w-full h-full object-cover rounded-t">
                                <p className=" text-black dark:text-white text-xl uppercase">
                                    no image
                                </p>
                            </div>
                        )}
                    </Link>
                </div>
            </Card.Image>
            <Card.Content className="flex flex-col justify-between h-[10rem] w-full">
                <div className="flex flex-col px-4 py-2 h-[7rem] w-full">
                    <div className="text-center">
                        <h1 className="text-main text-lg font-bold leading-6">
                            <Link href={`${path}/${post.data.id}`}>
                                {shortTitle}
                            </Link>
                        </h1>
                        <p className="text-base">{post.data.sub_title}</p>
                    </div>
                </div>
                <div className="flex justify-between mt-auto px-4 pt-2 pb-4">
                    <Link
                        href={`${path}/${post.data.id}`}
                        className="mt-auto flex items-center gap-1"
                    >
                        <p className="font-medium bg-gradient-to-r from-[rgb(0,158,224)] to-[rgb(0,158,224)] bg-[length:0px_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]">
                            Читать дальше
                        </p>
                        <span className="text-sm">
                            <BsArrowRight />
                        </span>
                    </Link>
                    {isAdmin ? (
                        <div className="flex gap-2">
                            <EditButton id={post.data.id} path={path} />
                            <DeleteButton
                                post={post}
                                redirectPath={path}
                                apiPath="/project"
                            />
                        </div>
                    ) : null}
                </div>
            </Card.Content>
        </Card>
    );
};
