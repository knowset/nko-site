import { deletePostById } from "@/faunadb/functions";
import { FaunadbPost, Case } from "@/types";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const token = await getToken({ req });

    if (token && token.role === "admin") {
        try {
            const data = (await req.json()) as FaunadbPost<Case>;
            const postOrError = await deletePostById<Case>("case", {
                ...data,
            });
            return NextResponse.json(postOrError);
        } catch (err) {
            return NextResponse.json(err);
        }
    }

    return NextResponse.json({
        status: 1020,
        errors: [
            {
                message: "Отказано в доступе",
            },
        ],
    });
}
