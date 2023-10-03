"use client";

import { Button } from "@/components/Button";
import { ImageSelector } from "@/components/ImageSelector";
import { ImageState, IMG, EventForStudents } from "@/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Input } from "../../Input";
import { FormLayout } from "../../../Layouts/FormLayout";

export const CreateEventForStudentsForm: FC<{}> = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [formValues, setFormValues] = useState<EventForStudents>({
        title: "",
        description: "",
        site: "",
        end_of_the_implementation_period: "",
    });
    const [error, setError] = useState("");

    const handleSubmit: (
        event: FormEvent<HTMLFormElement>
    ) => Promise<void> = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch(`/api/event_for_students/new`, {
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
            router.push(`/calendar/for_students`);
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
            title="Создание новой статьи в разделе Календарь / Студентам"
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
                title="До ...?"
                value={formValues.end_of_the_implementation_period}
                onChange={handleChange}
                name="end_of_the_implementation_period"
                type="text"
                required
            />
            <Input
                title="Сайт"
                value={formValues.site}
                onChange={handleChange}
                name="site"
                type="text"
                required
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
