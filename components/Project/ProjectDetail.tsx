"use client";

import { notFound, usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ImageTabs } from "../ImageTabs";
import { LoadingPostDetail } from "../LoadingPostDetail";

type Project = {
    ref: any;
    ts: any;
    data: {
        id: string;
        title: string;
        sub_title: string;
        start_of_the_implementation_period: string;
        end_of_the_implementation_period: string;
        source_of_financing: string;
        amount_of_the_subsidy: string;
        main_results: string;
        images: { id: number; value: string }[];
        date: string;
    };
};

type ReturnedData = {
    post: Project;
};

export const ProjectDetail: FC<{}> = () => {
    const path = usePathname();
    const searchParams = useSearchParams();
    const [post, setPost] = useState<Project | null>();
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

                const data: ReturnedData = await res.json();

                setLoading(false);
                if (!data || !data.post) {
                    setPost(null);
                }

                setPost(data.post);
            }
            setLoading(false);
        };
        retrievData();
    }, [post]);

    if (loading) return <LoadingPostDetail />;

    if (!post && !loading) return notFound();

    return !!post ? (
        <section className="mx-auto max-w-3xl lg:px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-8">
            <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                    <div className="space-y-1 text-center">
                        <dl className="space-y-10">
                            <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                {format(new Date(post.data.date), "d MMMM yyyy", {
                                    locale: ru,
                                })}
                            </p>
                        </dl>
                        <div>
                            <h1 className="text-2xl font-extrabold leading-8 tracking-tight sm:text-4xl sm:leading-10 md:leading-14 text-main">
                                {post.data.title}
                            </h1>
                        </div>
                    </div>
                </header>
                <ImageTabs images={post.data.images} />
                <div className="flex flex-col gap-2 py-4 xl:p-4 text-lg mt-4">
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
