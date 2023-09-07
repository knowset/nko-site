"use client";

import { ImageSelector } from "@/components/ImageSelector";
import { FaunadbPost, ImageState, IMG, Project } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Input } from "../../Input";

interface EditProjectFormProps {
    project: FaunadbPost<Project>;
}

export const EditProjectForm: FC<EditProjectFormProps> = ({ project }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [images, setImages] = useState<IMG[]>(
        project.data.images_ids.map((item) => {
            return { state: ImageState.UPLOADED, image: item };
        })
    );

    const [formValues, setFormValues] = useState<Project>({
        ...project.data,
        images_ids: project.data.images_ids,
    });
    const [error, setError] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const images_ids = await uploadImage(images);
        try {
            const res = await fetch(`/api/project/edit/${project.data.id}`, {
                method: "POST",
                body: JSON.stringify({
                    ref: project.ref,
                    ts: project.ts,
                    data: { ...formValues, images_ids: images_ids },
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) {
                setError((await res.json()).message);
                return;
            }
            router.push(`/project`);
        } catch (error: any) {
            setError(error);
            setIsLoading(false);
        }
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const uploadImage: (images: IMG[]) => Promise<string[]> = async (
        images
    ) => {
        if (images.length == 0) return [];

        const imagesIDS: string[] = [];

        await Promise.all(
            images.map(async (item) => {
                if (!item.image) return [];

                if (item.image instanceof File) {
                    item.state = ImageState.LOADING;
                    const form = new FormData();
                    form.append(
                        "file",
                        item.image,
                        item.image.name + "-" + new Date()
                    );
                    form.append("postType", "project");
                    form.append("title", formValues.title);

                    const res = await fetch("/api/image/upload", {
                        method: "POST",
                        body: form,
                    });
                    const imageID = (await res.json()).id;
                    item.state = ImageState.PREUPLOADED;
                    imagesIDS.push(imageID);
                } else if (typeof item.image === "string") {
                    if (item.state === ImageState.DELETED) {
                        await fetch("/api/image/delete", {
                            method: "POST",
                            body: JSON.stringify({ id: item.state }),
                        });
                        return;
                    } else {
                        imagesIDS.push(item.image);
                    }
                }
            })
        );
        return imagesIDS;
    };

    return (
        <div className="flex justify-center w-full">
            <form
                className="flex flex-col bg-white rounded shadow-lg py-8 px-8 mt-12 gap-4 w-full sm:w-[90%] lg:w-[80%] xl:w-[70]"
                onSubmit={handleSubmit}
            >
                <label className="font-semibold text-xl text-center">
                    Редактирование проекта
                </label>
                <hr className="my-4" />
                <Input
                    title="Название статьи"
                    value={formValues.title}
                    onChange={handleChange}
                    name="title"
                    type="text"
                    required
                    inputType="textaria"
                    height="h-24"
                />
                <Input
                    title="Дополнительная информация"
                    value={formValues.sub_title}
                    onChange={handleChange}
                    name="sub_title"
                    type="text"
                    inputType="textaria"
                    height="h-24"
                />
                <label className="font-semibold text-base mt-3">
                    Срок реализации
                </label>
                <div className="flex gap-4 mt-2 flex-col sm:flex-row">
                    <div>
                        <label>Начало</label>
                        <input
                            value={
                                formValues.start_of_the_implementation_period
                            }
                            onChange={handleChange}
                            pattern="(?:((?:0[1-9]|1[0-9]|2[0-9])\/(?:0[1-9]|1[0-2])|(?:30)\/(?!02)(?:0[1-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/(?:19|20)[0-9]{2})"
                            type="date"
                            name="start_of_the_implementation_period"
                            required
                            className="flex items-center h-12 px-4 w-full bg-gray-200 rounded focus:outline-none focus:ring-2"
                        />
                    </div>
                    <div>
                        <label>Конец</label>
                        <input
                            value={formValues.end_of_the_implementation_period}
                            onChange={handleChange}
                            type="date"
                            name="end_of_the_implementation_period"
                            required
                            className="flex items-center h-12 px-4 w-full bg-gray-200 rounded focus:outline-none focus:ring-2"
                        />
                    </div>
                </div>
                <Input
                    title="Источник финансирования"
                    value={formValues.source_of_financing}
                    onChange={handleChange}
                    name="source_of_financing"
                    type="text"
                    required
                    inputType="textaria"
                    height="h-24"
                />
                <Input
                    title="Объем субсидии"
                    value={formValues.amount_of_the_subsidy}
                    onChange={handleChange}
                    name="amount_of_the_subsidy"
                    type="text"
                    required
                />
                <Input
                    title="Основные результаты"
                    value={formValues.main_results}
                    onChange={handleChange}
                    name="main_results"
                    required
                    className="flex items-center h-40 p-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                    inputType="textaria"
                />
                <label className="font-semibold text-base">Картинки</label>
                <ImageSelector
                    images={images}
                    isLoading={isLoading}
                    setImages={setImages}
                />
                <button
                    className="flex items-center justify-center h-12 px-6 w-full bg-blue-600 mt-8 rounded font-semibold text-sm text-white hover:bg-blue-700"
                    type="submit"
                >
                    {isLoading ? (
                        <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                    ) : (
                        "Сохранить"
                    )}
                </button>
                {error && (
                    <p className="text-center bg-red-300 py-4 mt-6 rounded">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
};
