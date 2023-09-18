"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const SignInForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            setLoading(true);
            setFormValues({ email: "", password: "" });

            const res = await signIn("credentials", {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
                callbackUrl,
            });

            setLoading(false);

            if (!res?.error) {
                router.push(callbackUrl);
            } else {
                setError("invalid email or password");
            }
        } catch (error: any) {
            setLoading(false);
            setError(error);
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
                    Вход
                </label>
                <hr className="my-4" />
                <label className="font-semibold text-base">Email</label>
                <input
                    value={formValues.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    required
                    className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                />
                <label className="font-semibold text-base mt-3">Пароль</label>
                <input
                    value={formValues.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    required
                    className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                />
                <button
                    className="flex items-center justify-center h-12 px-6 w-full bg-main mt-8 rounded font-semibold text-sm text-white hover:bg-main"
                    type="submit"
                >
                    {loading ? (
                        <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                    ) : (
                        "Войти"
                    )}
                </button>
                <div className="flex mt-6 justify-center text-base space-x-6">
                    <a className="text-main hover:text-main" href="#">
                        Забыли пароль
                    </a>
                    <span className="mx-2 text-gray-300">/</span>
                    <Link className="text-main hover:text-main" href="/register">
                        Регистрация
                    </Link>
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
