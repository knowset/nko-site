"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Input } from "../../Input";

export const CreateProjectForm: FC<{}> = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [inputImageList, setInputImageList] = useState([
        { id: 0, value: "" },
    ]);
    const [formValues, setFormValues] = useState({
        title: "",
        sub_title: "",
        start_of_the_implementation_period: "",
        end_of_the_implementation_period: "",
        source_of_financing: "",
        amount_of_the_subsidy: "",
        main_results: "",
        images: [] as { id: number; value: string }[],
    });
    const [error, setError] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`/api/project/new`, {
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
            router.push(`/project`);
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
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
        }
    };

    const deleteInputImage = (id: number) => {
        let copy: { id: number; value: string }[];
        if (inputImageList.length > 0) {
            copy = inputImageList.filter((item) => {
                if (item.id < id) return item;
                if (item.id > id) return { id: item.id - 1, value: item.value };
            });
            setInputImageList(copy);
        }
    };

    return (
        <div className="flex justify-center w-full">
            <form
                className="flex flex-col bg-white rounded shadow-lg py-8 px-8 mt-12 gap-4 w-full sm:w-[90%] lg:w-[80%] xl:w-[70]"
                onSubmit={handleSubmit}
            >
                <label className="font-semibold text-xl text-center">
                    Создание нового проекта
                </label>
                <hr className="my-4" />
                <Input
                    title="Название статьи"
                    value={formValues.title}
                    onChange={handleChange}
                    name="title"
                    type="text"
                    required
                    inputType="textaria"
                    height="h-24"
                />
                <Input
                    title="Дополнительная информация"
                    value={formValues.sub_title}
                    onChange={handleChange}
                    name="sub_title"
                    type="text"
                    inputType="textaria"
                    height="h-24"
                />
                <label className="font-semibold text-base mt-3">
                    Срок реализации
                </label>
                <div className="flex gap-4 mt-2 flex-col sm:flex-row">
                    <div>
                        <label>Начало</label>
                        <input
                            value={
                                formValues.start_of_the_implementation_period
                            }
                            onChange={handleChange}
                            pattern="(?:((?:0[1-9]|1[0-9]|2[0-9])\/(?:0[1-9]|1[0-2])|(?:30)\/(?!02)(?:0[1-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/(?:19|20)[0-9]{2})"
                            type="date"
                            name="start_of_the_implementation_period"
                            required
                            className="flex items-center h-12 px-4 w-full bg-gray-200 rounded focus:outline-none focus:ring-2"
                        />
                    </div>
                    <div>
                        <label>Конец</label>
                        <input
                            value={formValues.end_of_the_implementation_period}
                            onChange={handleChange}
                            type="date"
                            name="end_of_the_implementation_period"
                            required
                            className="flex items-center h-12 px-4 w-full bg-gray-200 rounded focus:outline-none focus:ring-2"
                        />
                    </div>
                </div>
                <Input
                    title="Источник финансирования"
                    value={formValues.source_of_financing}
                    onChange={handleChange}
                    name="source_of_financing"
                    type="text"
                    required
                    inputType="textaria"
                    height="h-24"
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
                    className="flex items-center h-40 p-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                    inputType="textaria"
                />
                <div>
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
                                value={item.value}
                            />
                            <button
                                onClick={(e) => handleDeleteInput(e, item.id)}
                                className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white text-xl flex justify-center items-center rounded"
                            >
                                <RxCross2 />
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    className="flex items-center justify-center h-12 px-6 w-full bg-purple-600 mt-2 rounded font-semibold text-sm text-white hover:bg-purple-800"
                    type="button"
                    onClick={handleAddInput}
                >
                    Добавить поле для ссылки
                </button>
                <button
                    className="flex items-center justify-center h-12 px-6 w-full bg-blue-600 mt-8 rounded font-semibold text-sm text-white hover:bg-blue-700"
                    type="submit"
                >
                    {loading ? (
                        <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                    ) : (
                        "Редактировать"
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
