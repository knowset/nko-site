"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

interface FormProps {
    title: string;
    type: string;
}

export const CreatePostForm: FC<FormProps> = ({ title: formTitle, type }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [inputImageList, setInputImageList] = useState([
        { id: 0, value: "" },
    ]);
    const [formValues, setFormValues] = useState({
        title: "",
        text: "",
        images: [] as { id: number; value: string }[],
    });
    const [error, setError] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);
        setFormValues({ title: "", text: "", images: [] });

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

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        console.log(name, value);
        if (name.includes("input")) {
            const inputId = Number(name.split("-")[1]);
            const input = inputImageList.find((item) => item.id === inputId);
            const index = inputImageList.indexOf(input as any);
            inputImageList[index].value = value;
            setInputImageList(inputImageList);
            setFormValues({ ...formValues, images: inputImageList });
        } else {
            setFormValues({ ...formValues, [name]: value });
        }
    };

    const handleAddInput = (e: any) => {
        e.preventDefault();
        addInputImage();
    };

    const handleDeleteInput = (e: any, id: number) => {
        e.preventDefault();
        deleteInputImage(id);
    };

    const addInputImage = () => {
        let copy = [...inputImageList];
        if (inputImageList.length < 10) {
            copy = [...copy, { id: inputImageList.length, value: "" }];
            setInputImageList(copy);
            console.log(inputImageList);
        }
    };

    const deleteInputImage = (id: number) => {
        let copy: { id: number; value: string }[];
        if (inputImageList.length > 0) {
            copy = inputImageList.filter((item) => {
                if (item.id < id) return item;
                if (item.id > id) return { id: item.id - 1, value: item.value };
            });
            console.log(copy);
            setInputImageList(copy);
        }
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
                <label className="font-semibold text-base mt-3">
                    Сылки на картинки
                </label>
                {inputImageList.map((item) => (
                    <div
                        key={"input" + item.id.toString()}
                        className="flex items-center gap-2 mt-2"
                    >
                        <input
                            className="flex items-center h-12 px-4 w-full bg-gray-200 rounded focus:outline-none focus:ring-2"
                            key={item.id}
                            onChange={handleChange}
                            name={"input-" + item.id.toString()}
                        />
                        <button
                            onClick={(e) => handleDeleteInput(e, item.id)}
                            className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white text-xl flex justify-center items-center rounded"
                        >
                            <RxCross2 />
                        </button>
                    </div>
                ))}
                <button
                    className="flex items-center justify-center h-12 px-6 w-full bg-purple-600 mt-2 rounded font-semibold text-sm text-blue-100 hover:bg-purple-800"
                    type="button"
                    onClick={handleAddInput}
                >
                    Добавить поле для ссылки
                </button>
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
