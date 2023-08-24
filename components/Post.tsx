"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface PostProps {
    post: {
        id: string;
        title: string;
        text: string;
        images: string;
        date: string;
    };
}

export const Post: FC<PostProps> = ({ post }) => {
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
                    <div className="flex flex-col justify-between h-[10rem] p-4">
                        <div>
                            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                                <Link href={`${path}?p=${post.id}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                                {post.text.slice(0, 75)}
                            </p>
                        </div>
                        <div>
                            <Link
                                href={`${path}?p=${post.id}`}
                                className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                                Читать дальше →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
