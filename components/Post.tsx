"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DeleteButton } from "./CRUD/DeleteButton";
import { H1 } from "./Text/H1";
import { EditButton } from "./CRUD/EditButton";
import { AiOutlineArrowRight } from "react-icons/ai";

export interface PostProps {
    post: {
        id: string;
        title: string;
        sub_title: string;
        start_of_the_implementation_period: string;
        end_of_the_implementation_period: string;
        source_of_financing: string;
        amount_of_the_subsidy: string;
        main_results: string;
        images: string;
        date: string;
    };
    isAdmin?: boolean;
}

export const Post: FC<PostProps> = ({ post, isAdmin = false }) => {
    const path = usePathname();
    let images: { id: number; value: string }[] = [];
    if (!!post.images) {
        images = JSON.parse(post.images);
    }

    return (
        <div className="w-full">
            <div className="w-full p-2 mb-2">
                <div className="rounded shadow-md h-full">
                    <div>
                        <Link href={`${path}?p=${post.id}`}>
                            <div className="relative pb-[75%]">
                                {images.length > 0 ? (
                                    <img
                                        className="absolute h-full w-full object-cover rounded-t"
                                        src={images[0].value}
                                    />
                                ) : (
                                    <div className="flex justify-center items-center absolute w-full h-full object-cover rounded-t bg-zinc-600">
                                        <p className=" text-white text-xl uppercase">
                                            no image
                                        </p>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col justify-between h-[10rem] px-4 pt-2 pb-4">
                        <div className="text-center">
                            <H1 textsize="text-2xl">
                                <Link href={`${path}?p=${post.id}`}>
                                    {post.title}
                                </Link>
                            </H1>
                            <p className="text-base">{post.sub_title}</p>
                        </div>
                        <div className="flex justify-between">
                            <Link
                                href={`${path}?p=${post.id}`}
                                className="mt-auto flex items-center gap-1"
                            >
                                <p className="font-medium bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0px_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]">Читать дальше</p>
                                <span className="text-sm"><AiOutlineArrowRight /></span>
                            </Link>
                            {isAdmin ? (
                                <div className="flex gap-2">
                                    <EditButton id={post.id} path={path} />
                                    <DeleteButton id={post.id} path={path} />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
