"use client";

import { notFound, usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ReturnedData = {
    post: {
        id: string;
        title: string;
        text: string;
        images: string;
        date: string;
    };
};

type PostItem = {
    id: string;
    title: string;
    text: string;
    images: string;
    date: string;
};

export const PostDetail: FC<{}> = () => {
    const path = usePathname();
    const searchParams = useSearchParams();
    const [post, setPost] = useState<PostItem | null>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const retrievData = async () => {
            if (loading) {
                const res = await fetch(
                    `/api/${path}/${searchParams.get("p")}`
                );

                if (!res) {
                    throw new Error("Невозможно получить посты");
                }

                const data: ReturnedData = await res.json();

                console.log("DATA:", data);
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

    console.log("POST: ", post);
    console.log("Loading: ", loading);

    if (!post && !loading) return notFound();

    let images: { id: number; value: string }[] = [];
    if (!!post?.images) {
        images = JSON.parse(post.images);
    }
    console.log(path);
    console.log(searchParams.get("p"));
    return !!post ? (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-8">
            <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                    <div className="space-y-1 text-center">
                        <dl className="space-y-10">
                            <div>
                                <dt className="sr-only">Published on</dt>
                                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                    <time dateTime={post.date}>
                                        {format(
                                            new Date(post.date),
                                            "MMMM d, yyyy"
                                        )}
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
                <div className="block p-4">
                    {images.length > 0 && (
                        // <Carousel className="bg-zinc-700" autoPlay={false}>
                        //     {images.map((image) => (
                        //         <div key={"image-" + image.id} className="bg-zinc-600">
                        //             <img className="object-contain h-[36rem]" src={image.value} />
                        //         </div>
                        //     ))}
                        // </Carousel>
                        <Tabs className="bg-zinc-700 p-4" defaultValue="image-0">
                            <TabsList className="p-4 bg-zinc-700">
                                {images.map((image) => (
                                    <TabsTrigger className="bg-zinc-700 p-0 h-16 w-16" value={"image-" + image.id}>
                                        <div
                                            key={"image-" + image.id}
                                            className="h-full w-full bg-zinc-700 active:bg-zinc-700"
                                        >
                                            <img
                                                className="rounded object-contain h-16 w-16"
                                                src={image.value}
                                            />
                                        </div>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            {images.map((image) => (
                                <TabsContent value={"image-" + image.id}>
                                    <div
                                        key={"image-" + image.id}
                                        className="flex justify-center bg-zinc-700"
                                    >
                                        <img
                                            className="object-contain h-[36rem]"
                                            src={image.value}
                                        />
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    )}
                </div>
                <div>
                    <p className="text-xl">{post.text}</p>
                </div>
            </div>
        </section>
    ) : (
        <div></div>
    );
};
