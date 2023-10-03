import { getAllPosts } from "@/faunadb/functions";
import { FaunadbPostsOrError, Training } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: any }) {
    console.log("TR HERE");
    const data: FaunadbPostsOrError<Training> = await getAllPosts("training");
    return NextResponse.json(data);
}
