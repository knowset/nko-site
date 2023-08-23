"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import { format } from "date-fns";

interface PostDetailProps {
    post: {
        id: string;
        title: string;
        text: string;
        images: string;
        date: string;
    };
}

export const PostDetail: FC<PostDetailProps> = ({ post }) => {
    const path = usePathname();
    let images: {id: number, value: string }[] = [];
    if (!!post.images) {
        images = JSON.parse(post.images)
    }

    return (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-8">
            <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                    <div className="space-y-1 text-center">
                        <dl className="space-y-10">
                            <div>
                                <dt className="sr-only">Published on</dt>
                                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                    <time 
                                        dateTime={ post.date }
                                    >
                                        {format(new Date(post.date), "MMMM d, yyyy")}
                                    </time>
                                </dd>
                            </div>
                        </dl>
                        <div>
                            <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                                {post.title}
                            </h1>
                        </div>
                    </div>
                </header>
                <div className="p-4">
                    { images.length > 0 && <img className="rounded" src={images[0].value}/> }
                </div>
                <div>
                    <p className="text-xl">{post.text}</p>
                </div>
            </div>
        </section>
    );
};
