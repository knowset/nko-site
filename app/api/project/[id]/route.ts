import { getPostByID } from "@/faunadb/functions";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const post = await getPostByID("project", params.id);
    return NextResponse.json(post);
}
