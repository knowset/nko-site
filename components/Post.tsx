import { FC } from "react";
import Image from "next/image";

interface PostProps {
    post: {
        id: number;
        title: string;
        text: string;
        images: string[];
    };
}

export const Post: FC<PostProps> = ({ post }) => {
    return (
        <div>
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 z-10   dark:bg-gray-800">
                <a
                    className="relative block aspect-square"
                    href={`/project/${post.id}`}
                >
                    <img
                        alt="Thumbnail"
                        className="object-cover transition-all absolute h-[100%] w-[100%] inset-0"
                        sizes="(max-width: 768px) 30vw, 33vw"
                        width={768}
                        height={768}
                        src={post.images[0]}
                    />
                </a>
            </div>
            <div className="">
                <div>
                    <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-black">
                        <a href={`/project/${post.id}`}>
                            <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                                {post.title}
                            </span>
                        </a>
                    </h2>
                    <div className="mt-3 flex items-center justify-end space-x-3 text-gray-500 dark:text-gray-400">
                        Читать
                    </div>
                </div>
            </div>
        </div>
    );
};
