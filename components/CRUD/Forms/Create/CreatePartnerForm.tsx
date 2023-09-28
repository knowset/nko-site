"use client";

import { Button } from "@/components/Button";
import { ImageSelector } from "@/components/ImageSelector";
import { ImageState, IMG, Partner } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "../../Input";
import { FormLayout } from "../../../Layouts/FormLayout";

export const CreatePartnerForm: FC<{}> = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [images, setImages] = useState<IMG[]>([]);

    const [formValues, setFormValues] = useState<Partner>({
        title: "",
        abbreviation: "",
        director_of_the_organization: "",
        main_activity: "",
        site: "",
        social_media: "",
        email: "",
        NKO_projects: "",
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
            const res = await fetch(`/api/partner/new`, {
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
            router.push(`/nko/partner`);
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
                    form.append("postType", "partner");
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
        <FormLayout
            title="Создание новой статьи в разделе Партнеры"
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
