import { createPost } from "@/faunadb/functions";
import { NextRequest, NextResponse } from "next/server";
import { NKO, Project } from "@/types";
import { getToken } from "next-auth/jwt";

export async function POST(req: NextRequest) {
    const token = await getToken({ req });

    if (token && token.role === "admin") {
        const data = (await req.json()) as NKO;
        const postOrError = await createPost<NKO>("nko", { ...data });
        return NextResponse.json({ postOrError });
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
