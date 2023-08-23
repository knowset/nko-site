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
    let images: {id: number, value: string }[] = [];
    if (!!post.images) {
        images = JSON.parse(post.images)
    }
    console.log(images);
    return (
        <div>
            <div className="h-full  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
                { images.length > 0 && (
                    <Link href={`${path}/p/${post.id}`}>
                        <img src={images[0].value} />
                    </Link>
                )}
                <div className="p-6">
                    <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`${path}/p/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                        {post.text}
                    </p>
                    <Link
                        href={`${path}/p/${post.id}`}
                        className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                        Читать дальше →
                    </Link>
                </div>
            </div>
        </div>
    );
};
