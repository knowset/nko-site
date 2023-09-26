"use client";

import { Button } from "@/components/Button";
import { ImageSelector } from "@/components/ImageSelector";
import {
    FaunadbPost,
    GeneralPostProps,
    ImageState,
    IMG,
    NKO,
} from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "../../Input";
import { FormLayout } from "../../../Layouts/FormLayout";

interface EditNKOFormProps {
    post: FaunadbPost<NKO & GeneralPostProps>;
}

export const EditNKOForm: FC<EditNKOFormProps> = ({ post }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [images, setImages] = useState<IMG[]>(
        post.data.images_ids.map((item) => {
            return { state: ImageState.UPLOADED, image: item };
        })
    );

    const [formValues, setFormValues] = useState<NKO>({
        ...post.data,
        images_ids: post.data.images_ids,
    });
    const [error, setError] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const images_ids = await uploadImage(images);

        try {
            const res = await fetch(`/api/nko/edit/${post.data.id}`, {
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
            router.push(`/nko`);
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
                    form.append("postType", "post");
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
        <FormLayout title="Редактирование статьи в разделе НКО" onSubmit={handleSubmit}>
            <Input
                title="Название статьи"
                value={formValues.title}
                onChange={handleChange}
                name="title"
                type="text"
                required
                inputType="textarea"
            />{" "}
            <Input
                title="Сокращенное название статьи"
                value={formValues.abbreviation}
                onChange={handleChange}
                name="abbreviation"
                type="text"
                required
                inputType="textarea"
            />
            <Input
                title="Директор организации"
                value={formValues.director_of_the_organization}
                onChange={handleChange}
                name="director_of_the_organization"
                type="text"
                inputType="textarea"
            />
            <Input
                title="Основной вид деятельности"
                value={formValues.main_activity}
                onChange={handleChange}
                name="main_activity"
                type="text"
                required
                inputType="textarea"
            />
            <Input
                title="Сайт (необязательно)"
                value={formValues.site}
                onChange={handleChange}
                name="site"
                type="text"
            />
            <Input
                title="Социальные сети (необязательно)"
                value={formValues.social_media}
                onChange={handleChange}
                name="social_media"
                type="text"
            />
            <Input
                title="Электронная почта (необязательно)"
                value={formValues.email}
                onChange={handleChange}
                name="email"
                inputType="textarea"
            />
            <Input
                title="Проекты НКО, реализованные при методической и информационной поддержке Ресурсного центра"
                value={formValues.NKO_projects}
                onChange={handleChange}
                name="NKO_projects"
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
