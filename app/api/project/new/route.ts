import { createPost } from "@/faunadb/functions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    console.log("REQ: ", req);
    const { title, text } = (await req.json()) as {
        title: string;
        text: string;
    };

    const postOrError = await createPost("project", {title, text});
    return NextResponse.json({postOrError});
}
