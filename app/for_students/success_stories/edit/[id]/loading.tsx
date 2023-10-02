import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
    return (
        <div className="text-main text-4xl min-h-[calc(100vh-270px)] w-full flex justify-center items-center">
            <AiOutlineLoading3Quarters className="animate-spin" />
        </div>
    );
}