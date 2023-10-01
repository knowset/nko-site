import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { Card } from "../Card";

const postCardSkeletonVariants = cva("", {
    variants: {
        size: {
            big: "flex md:flex-row p-8 md:gap-8 min-h-[700px] md:min-h-[400px]",
            little: "h-full",
        },
    },
    defaultVariants: {
        size: "little",
    },
});

type PostCardSkeletonProps = {
    withImage?: boolean;
} & VariantProps<typeof postCardSkeletonVariants>;

export const PostCardSkeleton: FC<PostCardSkeletonProps> = ({
    size = "little",
    withImage = true,
}) => {
    return (
        <Card className={cn(postCardSkeletonVariants({ size: size }))}>
            {withImage ? (
                <Card.Image>
                    {size === "little" ? (
                        <div className="relative w-full pb-[80%] rounded-t">
                            <div className="animate-pulse flex justify-center items-center absolute w-full h-full object-cover rounded-t bg-secondary-light dark:bg-secondary-dark"></div>
                        </div>
                    ) : (
                        <div className="w-full md:w-auto md:h-full flex flex-col justify-start items-start mb-4 md:m-0">
                            <div className="w-full md:w-48 h-48 animate-pulse bg-secondary-light dark:bg-secondary-dark rounded"></div>
                        </div>
                    )}
                </Card.Image>
            ) : (
                <></>
            )}
            <Card.Content
                className={`flex flex-col ${
                    size === "little"
                        ? "items-center h-[10rem] justify-between"
                        : "items-start h-full justify-start"
                } w-full`}
            >
                {size === "little" ? (
                    <>
                        <div className="w-full h-[7rem] flex justify-center p-[0.5rem]">
                            <div className="w-full h-[6rem] rounded animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                        </div>
                        <div className="w-full h-[3rem] flex justify-center px-[0.5rem] pt-[0.25]">
                            <div className="w-full h-[2.25rem] rounded animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex flex-col gap-4">
                        <div className="w-full h-[2rem] flex justify-center">
                            <div className="w-full h-[2rem] rounded animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                        </div>
                        <div className="w-full h-full flex justify-center">
                            <div className="w-full h-full rounded animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                        </div>

                        <div className="w-full h-[4rem] mt-auto flex justify-center">
                            <div className="w-full h-[4rem] rounded animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                        </div>
                    </div>
                )}
            </Card.Content>
        </Card>
    );
};
