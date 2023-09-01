import { FC } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const LoadingPostDetail: FC<{}> = () => {
    return (
        <div className="flex flex-col justify-center items-center text-main text-4xl h-[24rem] md:h-full">
            <AiOutlineLoading3Quarters className="animate-spin" />
        </div>
    );
};
