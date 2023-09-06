"use client";

import { notFound, usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ImageTabs } from "../ImageTabs";
import { LoadingPostDetail } from "../LoadingPostDetail";
import { FaunadbPost, FaunadbPostOrError, Project } from "@/types";

export const ProjectDetail: FC<{}> = () => {
    const path = usePathname();
    const searchParams = useSearchParams();
    const [post, setPost] = useState<FaunadbPost<Project> | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const retrievData = async () => {
            if (loading) {
                const res = await fetch(
                    `/api/${path}/${searchParams.get("p")}`
                );

                if (!res) {
                    throw new Error("Невозможно получить пост");
                }

                const data: FaunadbPostOrError<Project> = await res.json();

                setLoading(false);
                if (!data || !data.post) {
                    setPost(null);
                    return;
                }

                setPost(data.post);
            }
            setLoading(false);
        };
        retrievData();
    }, [post]);

    if (loading) return <LoadingPostDetail />;

    if (!post && !loading) return notFound();

    let images_urls: string[] = [];
    if (post) {
        images_urls = post?.data.images_ids.map((item) => {
            return `https://drive.google.com/thumbnail?id=${item}&sz=w${2000}-h${2000}`;
        });
    }

    return !!post ? (
        <section className="w-full max-w-3xl lg:px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-8">
            <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                    <div className="space-y-1 text-center">
                        <dl className="space-y-10">
                            <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                {format(
                                    new Date(post.data.date),
                                    "d MMMM yyyy",
                                    {
                                        locale: ru,
                                    }
                                )}
                            </p>
                        </dl>
                        <div>
                            <h1 className="text-2xl font-extrabold leading-8 tracking-tight sm:text-4xl sm:leading-10 md:leading-14 text-main">
                                {post.data.title}
                            </h1>
                        </div>
                    </div>
                </header>
                <ImageTabs images_urls={images_urls} />
                <div className="flex flex-col gap-2 py-4 xl:p-4 text-lg mt-4 min-w-fit">
                    <p>
                        <span className="font-bold">Срок реализации: </span>{" "}
                        {post.data.start_of_the_implementation_period
                            .split("-")
                            .reverse()
                            .join(".")}{" "}
                        -{" "}
                        {post.data.end_of_the_implementation_period
                            .split("-")
                            .reverse()
                            .join(".")}{" "}
                    </p>
                    <p>
                        <span className="font-bold">
                            Источник финансирования:{" "}
                        </span>
                        {post.data.source_of_financing}
                    </p>
                    <p>
                        <span className="font-bold">Объем субсидии: </span>
                        {post.data.amount_of_the_subsidy} руб.
                    </p>
                    <p>
                        <span className="font-bold">Основные результаты: </span>
                        {post.data.main_results}
                    </p>
                </div>
            </div>
        </section>
    ) : (
        <div></div>
    );
};
