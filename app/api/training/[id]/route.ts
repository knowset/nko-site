import { getPostByID } from "@/faunadb/functions";
import { Project, Training } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const post = await getPostByID<Training>("training", params.id);
    return NextResponse.json(post);
}
