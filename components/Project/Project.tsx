"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DeleteButton } from "../CRUD/DeleteButton";
import { EditButton } from "../CRUD/EditButton";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaunadbPost, Project as ProjectType } from "@/types";
import Image from "next/image";

export type ProjectProps = {
    post: FaunadbPost<ProjectType>;
    isAdmin?: boolean;
};

export const Project: FC<ProjectProps> = ({ post, isAdmin = false }) => {
    const path = usePathname();

    const preview_url =
        "https://drive.google.com/uc?export=view&id=" + post.data.images_ids[0];

    // <a href="https://drive.google.com/uc?export=view&id=19Beq03UXi_w92HyxwJgDjQ7Hbobm6JAv">
    //     {" "}
    //     <img
    //         src="https://drive.google.com/uc?export=view&id=19Beq03UXi_w92HyxwJgDjQ7Hbobm6JAv"
    //         width="100%"
    //     />
    // </a>;

    return (
        <div className="rounded shadow-md h-full w-full mb-2">
            <div className="flex flex-col justify-between h-full">
                <Link href={`${path}?p=${post.data.id}`}>
                    <div className="relative pb-[75%] bg-zinc-600 rounded-t">
                        {post.data.images_ids.length > 0 ? (
                            <Image
                                className="absolute h-full w-full object-cover rounded-t"
                                src={preview_url}
                                alt=""
                                placeholder="blur"
                                blurDataURL={preview_url}
                                width={1000}
                                height={1000}
                            />
                        ) : (
                            <div className="flex justify-center items-center absolute w-full h-full object-cover rounded-t bg-zinc-600">
                                <p className=" text-white text-xl uppercase">
                                    no image
                                </p>
                            </div>
                        )}
                    </div>
                </Link>
                <div className="flex flex-col px-4 py-2">
                    <div className="text-center">
                        <h1 className="text-main text-xl font-bold leading-6">
                            <Link href={`${path}?p=${post.data.id}`}>
                                {post.data.title}
                            </Link>
                        </h1>
                        <p className="text-base">{post.data.sub_title}</p>
                    </div>
                </div>
                <div className="flex justify-between mt-auto px-4 pt-2 pb-4">
                    <Link
                        href={`${path}?p=${post.data.id}`}
                        className="mt-auto flex items-center gap-1"
                    >
                        <p className="font-medium bg-gradient-to-r from-[rgb(0,158,224)] to-[rgb(0,158,224)] bg-[length:0px_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]">
                            Читать дальше
                        </p>
                        <span className="text-sm">
                            <AiOutlineArrowRight />
                        </span>
                    </Link>
                    {isAdmin ? (
                        <div className="flex gap-2">
                            <EditButton id={post.data.id} path={path} />
                            <DeleteButton post={post} path={path} />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
