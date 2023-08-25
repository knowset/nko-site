import { FC } from "react";

export const H2Skeleton: FC<{}> = ({}) => {
    return (
        <h2 className="animate-pulse text-lg w-full text-transparent bg-zinc-200 rounded-md select-none">
            Text
        </h2>
    );
};
