"use client";

import { Button } from "@/components/Button";
import { ImageSelector } from "@/components/ImageSelector";
import { ImageState, IMG, Project } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "../../Input";
import { FormLayout } from "../../../Layouts/FormLayout";

export const CreateProjectForm: FC<{}> = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

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

    const handleSubmit: (
        event: FormEvent<HTMLFormElement>
    ) => Promise<void> = async (event) => {
        event.preventDefault();
        setIsLoading(true);

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
        } finally {
            setIsLoading(false);
            return;
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

                if (item.image instanceof File) {
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
                    imagessIDS.push(imageID);
                }
            })
        );
        return imagessIDS;
    };

    return (
        <FormLayout title="Создание новой статьи в разделе Проекты" onSubmit={handleSubmit}>
            <Input
                title="Название статьи"
                value={formValues.title}
                onChange={handleChange}
                name="title"
                type="text"
                required
                inputType="textarea"
            />
            <Input
                title="Дополнительная информация"
                value={formValues.sub_title}
                onChange={handleChange}
                name="sub_title"
                type="text"
                inputType="textarea"
            />
            <label className="font-semibold text-base mt-3">
                Срок реализации
            </label>
            <div className="flex gap-4 mt-2 flex-col sm:flex-row">
                <Input
                    title="Начало"
                    value={formValues.start_of_the_implementation_period}
                    onChange={handleChange}
                    name="start_of_the_implementation_period"
                    type="date"
                    inputType="date"
                    required
                />
                <Input
                    title="Конец"
                    value={formValues.end_of_the_implementation_period}
                    onChange={handleChange}
                    name="end_of_the_implementation_period"
                    type="date"
                    inputType="date"
                    required
                />
            </div>
            <Input
                title="Источник финансирования"
                value={formValues.source_of_financing}
                onChange={handleChange}
                name="source_of_financing"
                type="text"
                required
                inputType="textarea"
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
                inputType="textarea"
            />
            <label className="font-semibold text-base">Картинки</label>
            <ImageSelector
                images={images}
                setImages={setImages}
                isLoading={isLoading}
            />
            <Button>
                {isLoading ? (
                    <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                ) : (
                    "Создать"
                )}
            </Button>
            {error && (
                <p className="text-center bg-red-300 py-4 mt-6 rounded">
                    {error}
                </p>
            )}
        </FormLayout>
    );
};
