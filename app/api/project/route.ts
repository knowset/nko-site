import { getAllPosts } from "@/faunadb/functions";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest, { params }: { params: any }) {
    const posts = await getAllPosts("project");

    return NextResponse.json(posts);
}
