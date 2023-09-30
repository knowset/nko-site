"use client";

import { Button } from "@/components/Button";
import { ImageSelector } from "@/components/ImageSelector";
import { ImageState, IMG, Training } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "../../Input";
import { FormLayout } from "../../../Layouts/FormLayout";

export const CreateTrainingForm: FC<{}> = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [images, setImages] = useState<IMG[]>([]);

    const [formValues, setFormValues] = useState<Training>({
        title: "",
        description: "",
        duration: "",
        link_to_google_form: "",
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
            const res = await fetch(`/api/training/new`, {
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
            router.push(`/for_students/training`);
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
            imagess.map(async (item, index) => {
                if (!item.image) return [];

                item.state = ImageState.LOADING;

                if (item.image instanceof File) {
                    const form = new FormData();
                    form.append(
                        "file",
                        item.image,
                        item.image.name + "-" + new Date()
                    );
                    form.append("postType", "training");
                    form.append("title", formValues.title + index.toString());

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
        <FormLayout
            title="Создание новой статьи в разделе Тренинги"
            onSubmit={handleSubmit}
        >
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
                title="Описание"
                value={formValues.description}
                onChange={handleChange}
                name="description"
                type="text"
                inputType="textarea"
            />

            <Input
                title="Продолжительность"
                value={formValues.duration}
                onChange={handleChange}
                name="duration"
                type="text"
                required
                inputType="textarea"
            />
            <Input
                title="Ссылка на гугл форму"
                value={formValues.link_to_google_form}
                onChange={handleChange}
                name="link_to_google_form"
                type="text"
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
