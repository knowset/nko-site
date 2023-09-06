import { createPost } from "@/faunadb/functions";
import { NextRequest, NextResponse } from "next/server";
import { Project } from "@/types";

export async function POST(req: NextRequest) {
    const data = (await req.json()) as Project;
    
    const postOrError = await createPost("project", { ...data });

    return NextResponse.json({ postOrError });
}
