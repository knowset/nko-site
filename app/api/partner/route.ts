import { getAllPosts } from "@/faunadb/functions";
import { FaunadbPostsOrError, Partner } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: any }) {
    const data: FaunadbPostsOrError<Partner> = await getAllPosts<Partner>(
        "partner"
    );
    return NextResponse.json(data);
}
