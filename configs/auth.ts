import { getUserByEmail } from "@/faunadb/functions";
import argon2 from "argon2";
import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { v4 as uuid } from "uuid";

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
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const userOrError = await getUserByEmail(credentials.email);

                console.log("USER: ", userOrError);

                if (
                    !userOrError.user ||
                    !(await argon2.verify(
                        userOrError.user.password,
                        credentials.password
                    ))
                )
                    return null;

                const user = userOrError.user;

                console.log(user);

                return {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    key: uuid(),
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            if (token && session.user) {
                session.user.role = token.role;
            }
            return session;
        },

        jwt: ({ token, user }) => {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
    },
};
