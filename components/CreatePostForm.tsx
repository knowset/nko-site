"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface FormProps {
    title: string;
    type: string;
}

export const CreatePostForm: FC<FormProps> = ({ title: formTitle, type }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        title: "",
        text: "",
    });
    const [error, setError] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);
        setFormValues({ title: "", text: "" });

        try {
            const res = await fetch(`/api/${type}/new`, {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                    "Content-Type": "application/json",
                },

            });
            if (!res.ok) {
                setError((await res.json()).message);
                return;
            }
            router.push(`/${type}`);
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return (
        <div className="flex justify-center">
            <form
                className="flex flex-col bg-white rounded shadow-lg py-8 px-8 mt-12"
                onSubmit={handleSubmit}
            >
                <label className="font-semibold text-xl text-center">
                    {formTitle}
                </label>
                <hr className="my-4" />
                <label className="font-semibold text-base">
                    Название статьи
                </label>
                <input
                    value={formValues.title}
                    onChange={handleChange}
                    name="title"
                    type="text"
                    required
                    className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                />
                <label className="font-semibold text-base mt-3">
                    Содержание
                </label>
                <textarea
                    value={formValues.text}
                    onChange={handleChange}
                    name="text"
                    required
                    className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                />
                <button
                    className="flex items-center justify-center h-12 px-6 w-full bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
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
