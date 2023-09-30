"use client";

import { Button } from "@/components/Button";
import { ImageSelector } from "@/components/ImageSelector";
import { FaunadbPost, ImageState, IMG, Training } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "../../Input";
import { FormLayout } from "../../../Layouts/FormLayout";

interface EditTrainingFormProps {
    post: FaunadbPost<Training>;
}

export const EditTrainingForm: FC<EditTrainingFormProps> = ({ post }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [images, setImages] = useState<IMG[]>(
        post.data.images_ids.map((item) => {
            return { state: ImageState.UPLOADED, image: item };
        })
    );

    const [formValues, setFormValues] = useState<Training>({
        ...post.data,
        images_ids: post.data.images_ids,
    });
    const [error, setError] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const images_ids = await uploadImage(images);

        try {
            const res = await fetch(`/api/training/edit/${post.data.id}`, {
                method: "POST",
                body: JSON.stringify({
                    ref: post.ref,
                    ts: post.ts,
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
            router.push(`/for_students/training`);
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
                    form.append("postType", "training");
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
                            body: JSON.stringify({ id: item.image }),
                        });
                    } else {
                        imagesIDS.push(item.image);
                    }
                }
            })
        );
        return imagesIDS;
    };

    return (
        <FormLayout
            title="Редактирование статьи в разделе Партнеры"
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
                    "Обновить"
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
