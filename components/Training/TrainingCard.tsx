"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DeleteButton } from "../CRUD/DeleteButton";
import { EditButton } from "../CRUD/EditButton";
import { FaunadbPost, Training, GeneralPostProps } from "@/types";
import Image from "next/image";
import { Card } from "../Card";
import { BsArrowRight } from "react-icons/bs";

export type TrainingCardProps = {
    post: FaunadbPost<Training>;
    isAdmin?: boolean;
};

export const TrainingCard: FC<TrainingCardProps> = ({
    post,
    isAdmin = false,
}) => {
    const path = usePathname();

    const preview_url = `https://drive.google.com/thumbnail?id=${
        post.data.images_ids[0]
    }&sz=w${2000}-h${2000}`;

    return (
        <Card className=" flex md:flex-row p-8 gap-8 min-h-[700px] md:min-h-[400px]">
            <Card.Image>
                <div className="h-full flex felx-col justify-start items-start">
                    {post.data.images_ids.length > 0 ? (
                        <Image
                            className="w-48 h-48 object-scale-down"
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
                </div>
            </Card.Image>
            <Card.Content className="flex flex-col justify-between w-full">
                <div className="flex flex-col w-full gap-4 text-left">
                    <h1 className="text-main text-xl font-bold leading-6">
                        {post.data.title}
                    </h1>
                    <p>{post.data.description}</p>
                    <p>Продолжительность: {post.data.duration}</p>
                </div>
                <div className="flex justify-between mt-auto pt-2 pb-4 gap-4">
                    <Link
                        href={post.data.link_to_google_form}
                        className="flex items-center justify-center mt-4 h-12 px-6 w-full rounded font-semibold text-sm text-white bg-main hover:bg-main-hover"
                    >
                        Записаться на тренинг
                    </Link>
                </div>
                {isAdmin ? (
                    <div className="w-full flex justify-end">
                        <div className="flex gap-2">
                            <EditButton id={post.data.id} path={path} />
                            <DeleteButton
                                post={post}
                                redirectPath={path}
                                apiPath="training"
                            />
                        </div>
                    </div>
                ) : null}
            </Card.Content>
        </Card>
    );
};
