import { updatePostById } from "@/faunadb/functions";
import { FaunadbPost, GeneralPostProps, Project } from "@/types";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const token = await getToken({ req });

    if (token && token.role === "admin") {
        const data = (await req.json()) as FaunadbPost<
            Project & GeneralPostProps
        >;
        const postOrError = await updatePostById<Project>("project", {
            ...data,
        });
        return NextResponse.json(postOrError);
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
