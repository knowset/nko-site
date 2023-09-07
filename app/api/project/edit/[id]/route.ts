import { updatePostById } from "@/faunadb/functions";
import { FaunadbPost, Project } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = (await req.json()) as FaunadbPost<Project>;

    const postOrError = await updatePostById("project", { ...data });
    
    return NextResponse.json(postOrError);
}
