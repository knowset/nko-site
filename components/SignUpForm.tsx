"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SignUpForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        submitPassword: "",
    });
    const [error, setError] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);
        setFormValues({ email: "", password: "", submitPassword: "" });

        if (formValues.password != formValues.submitPassword) {
            setError("Пароли не совпадают");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("api/register", {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(res);
            if (!res.ok) {
                setError((await res.json()).message);
                return;
            }
            signIn(undefined, { callbackUrl: "/"});
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
                    Регистрация
                </label>
                <hr className="my-4" />
                <label className="font-semibold text-base">Email</label>
                <input
                    value={formValues.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    required
                    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                />
                <label className="font-semibold text-base mt-3">Password</label>
                <input
                    value={formValues.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    required
                    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                />
                <label className="font-semibold text-base mt-3">
                    Подтвердите пароль
                </label>
                <input
                    value={formValues.submitPassword}
                    onChange={handleChange}
                    type="password"
                    name="submitPassword"
                    required
                    className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                />
                <button
                    className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
                    type="submit"
                >
                    { loading ? <AiOutlineLoading3Quarters className="animate-spin text-2xl"/> : "Зарегистрироваться" }
                </button>
                <div className="flex mt-6 justify-end text-base space-x-6">
                    <a className="text-blue-400 hover:text-blue-500" href="#">
                        Вход
                    </a>
                </div>
                {error && (
                    <p className="text-center bg-red-300 py-4 mt-6 rounded">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
};

export { SignUpForm };
