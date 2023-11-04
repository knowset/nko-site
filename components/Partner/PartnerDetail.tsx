"use client";

import { FC } from "react";
import { ImageTabs } from "../ImageTabs";
import { FaunadbPost, Partner } from "@/types";
import { EditButton } from "../CRUD/EditButton";
import { DeleteButton } from "../CRUD/DeleteButton";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface PartnerDetailProps {
    post: FaunadbPost<Partner>;
}

export const PartnerDetail: FC<PartnerDetailProps> = ({ post }) => {
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
                        path="/nko/partner"
                        size="big"
                    />
                    <DeleteButton
                        post={post}
                        redirectPath="/nko/partner"
                        apiPath="/partner"
                        size="big"
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
                    <div
                        className={`flex flex-col ${
                            images_urls.length < 2 ? "mt-8" : "mt-4"
                        } gap-2 py-4 xl:p-4 text-lg min-w-fit min-h-[16rem]`}
                    >
                        <p>
                            <span className="font-bold">
                                {!!post.data.job_title
                                    ? post.data.job_title
                                    : "Директор организации"}
                                :{" "}
                            </span>
                            {post.data.director_of_the_organization}
                        </p>
                        <p>
                            <span className="font-bold">
                                Основной вид деятельности:{" "}
                            </span>
                            {post.data.main_activity}
                        </p>
                        {post.data.site && (
                            <p>
                                <span className="font-bold">Сайт: </span>
                                <Link href={post.data.site}>
                                    {post.data.site}
                                </Link>
                            </p>
                        )}
                        {post.data.social_media && (
                            <p>
                                <span className="font-bold">
                                    Социальные сети:{" "}
                                </span>
                                {post.data.social_media}
                            </p>
                        )}
                        {post.data.email && (
                            <p>
                                <span className="font-bold">
                                    Электронная почта:{" "}
                                </span>
                                {post.data.email}
                            </p>
                        )}
                        <p>
                            <span className="font-bold">
                                Проекты НКО, реализованные при методической и
                                информационной поддержке Ресурсного центра:{" "}
                            </span>
                            {post.data.NKO_projects}
                        </p>
                    </div>
                </div>
            </section>
        </>
    ) : (
        <div></div>
    );
};
