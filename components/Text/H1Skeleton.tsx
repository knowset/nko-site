import { FC } from "react";

export const H1Skeleton: FC<{}> = () => {
    return (
        <h1 className="animate-pulse text-4xl w-full text-transparent bg-zinc-200 rounded-md select-none">
            Text
        </h1>
    );
};
