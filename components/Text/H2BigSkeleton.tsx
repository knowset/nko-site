import { FC } from "react";

export const H2BigSkeleton: FC<{}> = () => {
    return (
        <div className="animate-pulse text-lg w-full text-transparent bg-zinc-200 rounded-md select-none">
            Text
            <br />
            Text
            <br />
            Text
        </div>
    );
};
