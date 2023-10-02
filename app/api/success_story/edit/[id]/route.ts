import { updatePostById } from "@/faunadb/functions";
import { FaunadbPost, GeneralPostProps, SuccessStory } from "@/types";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const token = await getToken({ req });

    if (token && token.role === "admin") {
        const data = (await req.json()) as FaunadbPost<
            SuccessStory & GeneralPostProps
        >;
        const postOrError = await updatePostById<SuccessStory>("success_story", {
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
