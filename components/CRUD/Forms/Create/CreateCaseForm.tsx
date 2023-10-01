"use client";

import { Button } from "@/components/Button";
import { ImageSelector } from "@/components/ImageSelector";
import { ImageState, IMG, Case } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "../../Input";
import { FormLayout } from "../../../Layouts/FormLayout";

export const CreateCaseForm: FC<{}> = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [formValues, setFormValues] = useState<Case>({
        title: "",
        description: "",
        customer: "",
        google_file_id: "",
    });
    const [error, setError] = useState("");

    const handleSubmit: (
        event: FormEvent<HTMLFormElement>
    ) => Promise<void> = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch(`/api/case/new`, {
                method: "POST",
                body: JSON.stringify({ ...formValues }),
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

    return (
        <FormLayout
            title="Создание новой статьи в разделе Кейсы"
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
