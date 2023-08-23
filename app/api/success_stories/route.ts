import { getAllPosts } from "@/faunadb/functions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const posts = await getAllPosts("success_stories");

    return NextResponse.json({ posts: posts.data });
}
