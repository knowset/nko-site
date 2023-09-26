"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FormLayout } from "@/components/Layouts/FormLayout";
import { Input } from "@/components/CRUD/Input";
import { Button } from "@/components/Button";
import { ErrorField, UserResponse } from "@/types";

export const SignInForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<ErrorField[]>([]);

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

            if (!res) {
                setErrors([
                    { field: "password", message: "Что-то пошло не так!" },
                ]);
            }

            if (res?.error) {
                const _res = JSON.parse(res.error) as UserResponse;
                console.log(_res);
                if (_res.errors) {
                    setErrors(_res.errors);
                }
            }

            setLoading(false);
            if (res?.ok && !!!res.error) {
                router.push(callbackUrl);
            }
        } catch (error: any) {
            setLoading(false);
            // setError(error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return (
        <FormLayout title="Вход" onSubmit={handleSubmit}>
            <Input
                title="Email"
                value={formValues.email}
                onChange={handleChange}
                name="email"
                type="email"
                required
                errorMessage={
                    errors.find((error) => error.field === "email")?.message
                }
            />
            <Input
                title="Пароль"
                value={formValues.password}
                onChange={handleChange}
                name="password"
                type="password"
                required
                errorMessage={
                    errors.find((error) => error.field === "password")?.message
                }
            />
            <Button type="submit" className="mt-4">
                {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                ) : (
                    "Войти"
                )}
            </Button>
        </FormLayout>
    );
};
