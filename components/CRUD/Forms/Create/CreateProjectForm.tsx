"use client";

import { ImageSelector } from "@/components/ImageSelector";
import { ImageState, IMG } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEventHandler, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Input } from "../../Input";

type Project = {
    title: string;
    sub_title: string;
    start_of_the_implementation_period: string;
    end_of_the_implementation_period: string;
    source_of_financing: string;
    amount_of_the_subsidy: string;
    main_results: string;
    images_ids: string[];
};

export const CreateProjectForm: FC<{}> = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [images, setImages] = useState<IMG[]>([]);

    const [formValues, setFormValues] = useState<Project>({
        title: "",
        sub_title: "",
        start_of_the_implementation_period: "",
        end_of_the_implementation_period: "",
        source_of_financing: "",
        amount_of_the_subsidy: "",
        main_results: "",
        images_ids: [],
    });
    const [error, setError] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);

        const images_ids = await uploadImage(images);
        try {
            const res = await fetch(`/api/project/new`, {
                method: "POST",
                body: JSON.stringify({ ...formValues, images_ids: images_ids }),
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
            setLoading(false);
        }
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const uploadImage: (imagess: IMG[]) => Promise<string[]> = async (
        imagess
    ) => {
        if (imagess.length == 0) return [];

        const imagessIDS: string[] = [];

        await Promise.all(
            imagess.map(async (item) => {
                if (!item.image) return [];

                item.state = ImageState.LOADING;

                const form = new FormData();
                form.append(
                    "file",
                    item.image,
                    item.image.name + "-" + new Date()
                );
                const res = await fetch("/api/save-images", {
                    method: "POST",
                    body: form,
                });
                const imageID = (await res.json()).id;
                item.state = ImageState.UPLOADED;
                imagessIDS.push(imageID);
            })
        );
        return imagessIDS;
    };

    return (
        <div className="flex justify-center w-full">
            <form
                className="flex flex-col bg-white rounded shadow-lg py-8 px-8 mt-12 gap-4 w-full sm:w-[90%] lg:w-[80%] xl:w-[70]"
                onSubmit={handleSubmit}
            >
                <label className="font-semibold text-xl text-center">
                    Создание нового проекта
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
                <div>
                    <label className="font-semibold text-base mt-3">
                        Сылки на картинки
                    </label>
                    <ImageSelector
                        images={images}
                        setImages={setImages}
                        isLoading={loading}
                    />
                </div>
                <button
                    className="flex items-center justify-center h-12 px-6 w-full bg-blue-600 mt-8 rounded font-semibold text-sm text-white hover:bg-blue-700"
                    type="submit"
                >
                    {loading ? (
                        <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                    ) : (
                        "Создать"
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
