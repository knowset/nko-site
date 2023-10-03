"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/CRUD/Input";
import { FormLayout } from "@/components/Layouts/FormLayout";
import { ErrorField } from "@/types";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SignUpForm = () => {
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        submitPassword: "",
    });
    const [errors, setErrors] = useState<ErrorField[]>([]);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true);
        setFormValues({ email: "", password: "", submitPassword: "" });

        if (formValues.password != formValues.submitPassword) {
            setErrors([
                { field: "submitPassword", message: "Пароли не совпадают" },
            ]);
            setLoading(false);
            return;
        }

        if (!formValues.email.includes("@")) {
            setErrors([
                { field: "email", message: "Email должен содержать @" },
            ]);
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
            if (!res.ok) {
                // setError((await res.json()).message);
                return;
            }
            signIn(undefined, { callbackUrl: "/" });
        } catch (error: any) {
            // setError(error);
            setLoading(false);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <FormLayout title="Регистрация" onSubmit={handleSubmit}>
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
            <Input
                title="Повторите пароль"
                value={formValues.submitPassword}
                onChange={handleChange}
                name="submitPassword"
                type="password"
                required
                errorMessage={
                    errors.find((error) => error.field === "submitPassword")
                        ?.message
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

export { SignUpForm };
