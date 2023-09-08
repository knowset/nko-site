import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
    return (
        <div className="text-main text-4xl my-60 xl:my-40">
            <AiOutlineLoading3Quarters className="animate-spin"/>
        </div>
    );
}
