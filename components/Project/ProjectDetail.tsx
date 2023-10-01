"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ImageTabs } from "../ImageTabs";
import { FaunadbPost, GeneralPostProps, Project } from "@/types";
import { EditButton } from "../CRUD/EditButton";
import { DeleteButton } from "../CRUD/DeleteButton";
import { useSession } from "next-auth/react";
import { FC } from "react";

interface ProjectDetailProps {
    post: FaunadbPost<Project & GeneralPostProps>;
}

export const ProjectDetail: FC<ProjectDetailProps> = ({ post }) => {
    const { data: session } = useSession();

    let images_urls: string[] = [];
    if (post) {
        images_urls = post.data.images_ids.map((item) => {
            return `https://drive.google.com/thumbnail?id=${item}&sz=w${2000}-h${2000}`;
        });
    }
    return !!post ? (
        <>
            {session?.user.role == "admin" ? (
                <div className="fixed right-4 bottom-4 flex gap-4 z-50">
                    <EditButton
                        id={post.data.id}
                        path="/center/project"
                        isPostDetail
                    />
                    <DeleteButton
                        post={post}
                        redirectPath="/center/project/"
                        apiPath="/project"
                        isPostDetail
                    />
                </div>
            ) : null}
            <section className="w-full max-w-3xl lg:px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-8">
                <div className="divide-y divide-border-light dark:divide-border-dark">
                    <header className="pt-6 pb-4">
                        <div className="space-y-1 text-center">
                            <div>
                                <h1 className="text-2xl font-extrabold leading-8 tracking-tight sm:text-4xl sm:leading-10 md:leading-14 text-main">
                                    {post.data.title}
                                </h1>
                            </div>
                        </div>
                    </header>
                    <ImageTabs images_urls={images_urls} />
                    <div className="flex flex-col gap-2 py-4 xl:p-4 text-lg mt-4 min-w-fit min-h-[16rem]">
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
                            <span className="font-bold">
                                Основные результаты:{" "}
                            </span>
                            {post.data.main_results}
                        </p>
                    </div>
                </div>
            </section>
        </>
    ) : (
        <div></div>
    );
};
