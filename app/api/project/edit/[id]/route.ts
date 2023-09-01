import { updatePostById } from "@/faunadb/functions";
import { Project } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const project = (await req.json()) as Project;

    const postOrError = await updatePostById("project", project as never);

    return NextResponse.json({ postOrError });
}
