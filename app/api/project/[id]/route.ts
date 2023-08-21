import { getPostByID } from "@/faunadb/functions";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    const posts = await getPostByID("project", params.id);
    return NextResponse.json(posts);
}
