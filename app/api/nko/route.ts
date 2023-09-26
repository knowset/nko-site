import { getAllPosts } from "@/faunadb/functions";
import { FaunadbPostsOrError, NKO, Project } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: any }) {
    const data: FaunadbPostsOrError<NKO> = await getAllPosts("nko");
    return NextResponse.json(data);
}
