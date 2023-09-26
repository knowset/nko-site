import { getPostByID } from "@/faunadb/functions";
import { NKO, Project } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const post = await getPostByID<NKO>("nko", params.id);
    return NextResponse.json(post);
}
