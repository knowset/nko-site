import { getAllPosts } from "@/faunadb/functions";
import { FaunadbPostsOrError, EventForStudents } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: any }) {
    const data: FaunadbPostsOrError<EventForStudents> = await getAllPosts(
        "event_for_students"
    );
    return NextResponse.json(data);
}
