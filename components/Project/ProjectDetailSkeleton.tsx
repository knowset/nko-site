import { FC } from "react";

export const ProjectDetailSkeleton: FC<{}> = () => {
    return (
        <section className="w-full max-w-3xl lg:px-4 sm:px-6 xl:max-w-5xl xl:px-0 mb-8">
            <div className="divide-y divide-border-light dark:divide-border-dark">
                <header className="pt-6 pb-0 h-[6.25rem]">
                    <div className="h-full w-full rounded-lg animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                </header>
                <div className="relative pb-[100%] xl:pb-[60%] my-4 flex justify-center">
                    <div className="absolute h-full w-full xl:w-[75%] object-cover rounded-lg my-2 shadow-lg animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                    <div className="h-full xl:w-[75%] mt-8 gap-4 xl:mx-[12.5%] overflow-x-scroll flex justify-start image-selector pb-6"></div>
                </div>
                <div className="flex flex-col py-4 xl:p-4 text-lg my-4 min-w-fit min-h-[16rem] rounded-md animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
            </div>
        </section>
    );
};
