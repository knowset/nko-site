import { getPostByID } from "@/faunadb/functions";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    console.log("HERERERER");
    const post = await getPostByID("project", params.id);
    console.log("GET:", post);
    return NextResponse.json(post);
}
