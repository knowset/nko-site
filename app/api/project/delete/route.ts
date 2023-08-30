import { deletePostById } from "@/faunadb/functions";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { id } = (await req.json()) as {
        id: string;
    };
    const postOrError = await deletePostById("project", id);

    return NextResponse.json({ postOrError });
}
