"use client";

import { notFound, usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ImageTabs } from "../ImageTabs";
import { ProjectDetailSkeleton } from "./ProjectDetailSkeleton";

type ReturnedData = {
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
};

type Project = {
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
    });

    if (loading) return <ProjectDetailSkeleton />;

    if (!post && !loading) return notFound();

    let images: { id: number; value: string }[] = [];
    if (!!post?.images) {
        images = JSON.parse(post.images);
    }
    return !!post ? (
        <section className="mx-auto max-w-3xl lg:px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-8">
            <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                    <div className="space-y-1 text-center">
                        <dl className="space-y-10">
                            <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                {format(new Date(post.date), "d MMMM yyyy", {
                                    locale: ru,
                                })}
                            </p>
                        </dl>
                        <div>
                            <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 text-main">
                                {post.title}
                            </h1>
                        </div>
                    </div>
                </header>
                <ImageTabs images={images} />
                <div className="flex flex-col gap-2 py-4 lg:p-4 text-lg mt-4">
                    <p>
                        <span className="font-bold">Срок реализации: </span>{" "}
                        {post.start_of_the_implementation_period
                            .split("-")
                            .reverse()
                            .join(".")}{" "}
                        -{" "}
                        {post.end_of_the_implementation_period
                            .split("-")
                            .reverse()
                            .join(".")}{" "}
                    </p>
                    <p>
                        <span className="font-bold">
                            Источник финансирования:{" "}
                        </span>
                        {post.source_of_financing}
                    </p>
                    <p>
                        <span className="font-bold">Объем субсидии: </span>
                        {post.amount_of_the_subsidy} руб.
                    </p>
                    <p>
                        <span className="font-bold">Основные результаты: </span>
                        {post.main_results}
                    </p>
                </div>
            </div>
        </section>
    ) : (
        <div></div>
    );
};
