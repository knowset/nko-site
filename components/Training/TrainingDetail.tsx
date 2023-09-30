"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ImageTabs } from "../ImageTabs";
import { FaunadbPost, GeneralPostProps, Training } from "@/types";
import { EditButton } from "../CRUD/EditButton";
import { DeleteButton } from "../CRUD/DeleteButton";
import { useSession } from "next-auth/react";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface TrainingDetailProps {
    post: FaunadbPost<Training>;
}

export const TrainingDetail: FC<TrainingDetailProps> = ({ post }) => {
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
                        path="/for_students/training"
                        isPostDetail
                    />
                    <DeleteButton post={post} path="/training" isPostDetail />
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
                <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
                        <div className="min-w-max mt-8">
                            <Image
                                className="w-48 h-48 sm:w-24 lg:w-48 sm:h-24 lg:h-48"
                                src={images_urls[0]}
                                alt=""
                                placeholder="blur"
                                blurDataURL={images_urls[0]}
                                width={2000}
                                height={2000}
                                quality={100}
                            />
                        </div>
                       <div className="flex flex-col gap-2 py-4 xl:p-4 text-lg mt-4">
                            <p>
                                <span className="font-bold">Описание: </span>
                                {post.data.description}
                            </p>
                            <p>
                                <span className="font-bold">
                                    Продолжительность:{" "}
                                </span>
                                {post.data.duration} руб.
                            </p>
                            <Link
                                href={post.data.link_to_google_form}
                                className="flex items-center justify-center mt-4 h-12 px-6 w-full rounded font-semibold text-sm text-white bg-main hover:bg-main-hover"
                            >
                                Записаться на тренинг
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    ) : (
        <div></div>
    );
};
