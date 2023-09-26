"use client";

import { ImageState, IMG } from "@/types";
import Image from "next/image";
import { ChangeEvent, FC } from "react";
import {
    AiFillPlusCircle,
    AiOutlineCheckCircle,
    AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { Plus } from "lucide-react";

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
        if (file) {
            images.map(async (item) => {
                if (file.image instanceof File) {
                    if (file.image !== item.image) {
                        copy.push(item);
                    }
                } else if (typeof file.image === "string") {
                    if (file.image === item.image) {
                        item.state = ImageState.DELETED;
                    }
                    copy.push(item);
                }
            });
        }
        console.log(copy);
        setImages(copy);
    };

    const files = images ? [...(images as any)] : [];

    return (
        <div className="flex min-w-full overflow-x-scroll image-selector pb-2 mt-2">
            <ul className="flex gap-4">
                {files.map((file: IMG, i) => (
                    <li
                        key={i}
                        className={`${
                            file.state === ImageState.DELETED ? "hidden" : ""
                        } relative w-20 h-20 lg:w-28 lg:h-28 shadow-md rounded-md`}
                    >
                        {!isLoading ? (
                            <div
                                onClick={() => handleFileDelete(i)}
                                className="cursor-pointer text-red-500 hover:text-red-600 border h-8 w-8 flex justify-center items-center rounded-md bg-white hover:bg-zinc-200 bg-opacity-30 hover:bg-opacity-50 absolute right-0 top-0"
                            >
                                <Plus className="rotate-45" />
                            </div>
                        ) : null}
                        {file.state == ImageState.LOADING ? (
                            <div className="text-4xl lg:text-5xl w-full h-full absolute backdrop-blur-md rounded-md">
                                <div className="w-full h-full flex justify-center items-center">
                                    <AiOutlineLoading3Quarters className="animate-spin fill-zinc-500" />
                                </div>
                            </div>
                        ) : null}
                        {file.state == ImageState.PREUPLOADED ? (
                            <div className="text-4xl lg:text-5xl w-full h-full absolute backdrop-blur-md rounded-md">
                                <div className="w-full h-full flex justify-center items-center">
                                    <AiOutlineCheckCircle className="fill-zinc-500" />
                                </div>
                            </div>
                        ) : null}
                        {!(typeof file.image === "string") ? (
                            <img
                                className="w-full h-full border-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-gray-200 hover:border-gray-300 transition-all duration-100 rounded-md shadow-md object-scale-down"
                                src={URL.createObjectURL(file.image)}
                            />
                        ) : (
                            <Image
                                className={`${
                                    file.state === ImageState.DELETED
                                        ? "hidden"
                                        : ""
                                } w-full h-full border border-border-light dark:border-border-dark hover:border-black hover:dark:border-white transition-all duration-100 rounded-md shadow-md object-scale-down`}
                                src={
                                    "https://drive.google.com/uc?export=view&id=" +
                                    file.image
                                }
                                width={1000}
                                height={1000}
                                alt=""
                            />
                        )}
                    </li>
                ))}
                {files.length < 10 && (
                    <li>
                        <label htmlFor="file">
                            <div className="group flex justify-center items-center text-4xl lg:text-5xl group w-20 h-20 lg:w-28 lg:h-28 border border-border-light dark:border-border-dark hover:border-black hover:dark:border-white border-dashed transition-all duration-300 rounded-md shadow-md">
                                <AiFillPlusCircle className="fill-border-light dark:fill-border-dark group-hover:fill-black group-hover:dark:fill-white duration-300" />
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
