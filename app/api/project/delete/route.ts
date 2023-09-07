import { deletePostById } from "@/faunadb/functions";
import { FaunadbPost, Project } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = (await req.json()) as FaunadbPost<Project>;
        await Promise.all(
            data.data.images_ids.map(async (id) => {
                await fetch(`${process.env.API_URL}/api/image/delete`, {
                    method: "POST",
                    body: JSON.stringify({ id: id }),
                });
            })
        );
        const postOrError = await deletePostById("project", { ...data });
        return NextResponse.json(postOrError);
    } catch (err) {
        return NextResponse.json(err);
    }
}
