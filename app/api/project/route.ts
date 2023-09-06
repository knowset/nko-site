import { getAllPosts } from "@/faunadb/functions";
import { FaunadbPostsOrError, Project } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: any }) {
    const data: FaunadbPostsOrError<Project> = await getAllPosts("project");
    return NextResponse.json(data);
}
