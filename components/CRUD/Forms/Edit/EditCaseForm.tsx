"use client";

import { Button } from "@/components/Button";
import { ImageSelector } from "@/components/ImageSelector";
import { FaunadbPost, ImageState, IMG, Case } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "../../Input";
import { FormLayout } from "../../../Layouts/FormLayout";

interface EditCaseFormProps {
    post: FaunadbPost<Case>;
}

export const EditCaseForm: FC<EditCaseFormProps> = ({ post }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [formValues, setFormValues] = useState<Case>({
        ...post.data,
    });
    const [error, setError] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch(`/api/case/edit/${post.data.id}`, {
                method: "POST",
                body: JSON.stringify({
                    ref: post.ref,
                    ts: post.ts,
                    data: { ...formValues },
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) {
                setError((await res.json()).message);
                return;
            }
            router.push(`/for_students/cases`);
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

    return (
        <FormLayout
            title="Редактирование статьи в разделе Кейсы"
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
                title="Заказчик"
                value={formValues.customer}
                onChange={handleChange}
                name="customer"
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
                title="id файла на gdrive"
                value={formValues.google_file_id}
                onChange={handleChange}
                name="google_file_id"
                type="text"
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
