import { getUserByEmail } from "@/faunadb/functions";
import { UserResponse } from "@/types";
import argon2 from "argon2";
import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "email",
                    type: "email",
                    required: true,
                },
                password: {
                    label: "password",
                    type: "password",
                    required: true,
                },
            },
            async authorize(credentials) {
                if (
                    !credentials ||
                    !credentials.email ||
                    !credentials.password
                ) {
                    throw new Error(
                        JSON.stringify({
                            status: 500,
                            errors: [
                                {
                                    field: "password",
                                    message: "Что-то пошло не так",
                                },
                            ],
                        })
                    );
                }

                const userOrError = await getUserByEmail(credentials.email);

                if (
                    !userOrError.user ||
                    !(await argon2.verify(
                        userOrError.user.password,
                        credentials.password
                    ))
                ) {
                    throw new Error(
                        JSON.stringify({
                            status: 500,
                            errors: [
                                {
                                    field: "email",
                                    message: "Неверный email или пароль.",
                                },
                            ],
                        })
                    );
                }

                const user = userOrError.user;

                const strId: string = user.id.toString();

                return {
                    id: strId,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            if (token && session.user) {
                session.user.role = token.role as string;
            }
            return session;
        },

        jwt: ({ token, user }) => {
            if (user) {
                token.role = user.role as string;
            }
            return token;
        },
    },
};
