import { FC } from "react";
import { H1Skeleton } from "../Text/H1Skeleton";
import { H2Skeleton } from "../Text/H2Skeleton";

export const ProjectDetailSkeleton: FC<{}> = () => {
    return (
        <section className="mx-auto max-w-3xl lg:px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-8">
            <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                    <div className="space-y-1 text-center">
                        <dl className="space-y-10">
                            <H2Skeleton />
                        </dl>
                        <div>
                        <h1 className="animate-pulse bg-zinc-200 text-transparent text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 ">
                                Text
                            </h1>
                        </div>
                    </div>
                </header>
                <div className="flex flex-col">
                    <div className="flex justify-center lg:px-4 relative pb-[100%] lg:pb-[75%] my-4">
                        <div className="animate-pulse absolute h-full w-full lg:w-[75%] object-cover rounded-lg my-2 bg-zinc-200"></div>
                    </div>
                    <div className="animate-pulse w-full h-24 bg-zinc-200 rounded-lg my-4"></div>
                </div>
                <div className="flex flex-col gap-2 pt-4">
                    <H2Skeleton />
                    <H2Skeleton />
                    <H2Skeleton />
                    <H2Skeleton />
                    <H2Skeleton />
                </div>
            </div>
        </section>
    );
};
