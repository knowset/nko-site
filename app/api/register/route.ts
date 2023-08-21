import { createUser } from "@/faunadb/functions";
import argon2 from "argon2";
import { NextResponse } from "next/server";

interface RequestBody {
    email: string;
    password: string;
}

export async function POST(request: Request) {
    try {
        const { email, password } = (await request.json()) as {
            email: string;
            password: string;
        };
        const hashed_password = await argon2.hash(password);

        const userOrError = await createUser({
            data: { email, password: hashed_password },
        });

        if (userOrError.status != 200) {
            throw new Error(
                JSON.stringify({
                    status: userOrError.status,
                    error: userOrError.error,
                })
            );
        }

        return NextResponse.json({
            user: {
                email: userOrError?.user?.email,
            },
        });
    } catch (err: any) {
        const errorData = JSON.parse((err as Error).message);
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: errorData.error.message,
            }),
            { status: errorData.status }
        );
    }
}
