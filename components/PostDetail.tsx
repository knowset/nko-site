"use client";

import { fetcher } from "@/helpers";
import { FC } from "react";
import useSWR from "swr";

interface PostDetailProps {
    postId: string;
}

export const PostDetail: FC<PostDetailProps> = ({ postId }) => {
    const { data, isLoading } = useSWR(`/api/project/${postId}`, fetcher);

    if (!data) {
        return <div>loading</div>;
    }

    if (isLoading) {
        return <div>loading</div>;
    }

    console.log(data);
    return (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                    <div className="space-y-1 text-center">
                        <dl className="space-y-10">
                            <div>
                                <dt className="sr-only">Published on</dt>
                                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                    <time datatype="2023-08-05T00:00:00.000Z">
                                        Saturday, August 5, 2023
                                    </time>
                                </dd>
                            </div>
                        </dl>
                        <div>
                            <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                                {data.post.title}
                            </h1>
                        </div>
                    </div>
                </header>
                <div>
                    <p className="text-xl">{data.post.text}</p>
                </div>
            </div>
        </section>
    );
};
