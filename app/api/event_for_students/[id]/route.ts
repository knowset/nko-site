import { getPostByID } from "@/faunadb/functions";
import { EventForStudents } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    const post = await getPostByID<EventForStudents>(
        "event_for_students",
        params.id
    );
    return NextResponse.json(post);
}
