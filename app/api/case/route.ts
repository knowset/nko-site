import { getAllPosts } from "@/faunadb/functions";
import { Case, FaunadbPostsOrError } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: any }) {
    const data: FaunadbPostsOrError<Case> = await getAllPosts("case");
    return NextResponse.json(data);
}
