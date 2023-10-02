import { getAllPosts } from "@/faunadb/functions";
import { FaunadbPostsOrError, SuccessStory } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: any }) {
    const data: FaunadbPostsOrError<SuccessStory> = await getAllPosts("success_story");
    return NextResponse.json(data);
}
