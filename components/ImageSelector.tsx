"use client";

import { ImageState, IMG } from "@/types";
import { ChangeEvent, FC, useState } from "react";
import {
    AiFillPlusCircle,
    AiOutlineCheckCircle,
    AiOutlineLoading3Quarters,
} from "react-icons/ai";

interface ImageSelectorProps {
    images: IMG[];
    setImages: any;
    isLoading: boolean;
}

export const ImageSelector: FC<ImageSelectorProps> = ({
    images,
    setImages,
    isLoading = false,
}) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            let copy: IMG[] = [...images];
            [...(e.target.files as unknown as File[])].map((item) => {
                copy.push({ state: ImageState.DEFAULT, image: item });
            });
            setImages(copy);
        }
    };

    const handleFileDelete = (id: number) => {
        let copy: IMG[] = [];
        const file = (images as never as IMG[]).at(id);
        images.map((item) => {
            if (file?.image !== item.image) {
                if (file) {
                    copy.push(item);
                }
            }
        });
        setImages(copy);
    };

    const files = images ? [...(images as any)] : [];

    return (
        <div className="flex min-w-full overflow-x-scroll image-selector pb-2 mt-2">
            <ul className="flex gap-4">
                {files.map((file: IMG, i) => (
                    <li
                        key={i}
                        className="relative w-20 h-20 lg:w-28 lg:h-28 shadow-md rounded-md"
                    >
                        {!isLoading ? (
                            <div
                                onClick={() => handleFileDelete(i)}
                                className="cursor-pointer text-red-500 hover:text-red-600 text-4xl border h-8 w-8 flex justify-center items-center rounded-md bg-white hover:bg-zinc-200 absolute right-1 top-1"
                            >
                                <span>&times;</span>
                            </div>
                        ) : null}
                        {file.state == ImageState.LOADING ? (
                            <div className="text-4xl lg:text-5xl w-full h-full absolute backdrop-blur-md rounded-md">
                                <div className="w-full h-full flex justify-center items-center">
                                    <AiOutlineLoading3Quarters className="animate-spin fill-zinc-500" />
                                </div>
                            </div>
                        ) : null}
                        {file.state == ImageState.UPLOADED ? (
                            <div className="text-4xl lg:text-5xl w-full h-full absolute backdrop-blur-md rounded-md">
                                <div className="w-full h-full flex justify-center items-center">
                                    <AiOutlineCheckCircle className="fill-zinc-500" />
                                </div>
                            </div>
                        ) : null}
                        <img
                            className="w-full h-full border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md object-scale-down"
                            src={URL.createObjectURL(file.image)}
                        />
                    </li>
                ))}
                {files.length < 10 && (
                    <li>
                        <label htmlFor="file">
                            <div className="flex justify-center items-center text-4xl lg:text-5xl group w-20 h-20 lg:w-28 lg:h-28 border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-zinc-100 hover:bg-zinc-200 transition-all duration-100 rounded-md shadow-md">
                                <AiFillPlusCircle className="fill-zinc-300 group-hover:fill-zinc-400" />
                            </div>
                        </label>
                        <input
                            className="hidden"
                            type="file"
                            name="file"
                            id="file"
                            onChange={handleFileChange}
                            multiple
                        />
                    </li>
                )}
            </ul>
        </div>
    );
};
