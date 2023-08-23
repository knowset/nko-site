import { createPost } from "@/faunadb/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { title, text, images } = (await req.json()) as {
        title: string;
        text: string;
        images: string[];
    };

    const postOrError = await createPost("success_stories", {
        title,
        text,
        images,
    });

    return NextResponse.json({ postOrError });
}
