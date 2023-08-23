import { getPostByID } from "@/faunadb/functions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    // const path = req.nextUrl.pathname.split("/").map((item) => {
    //     if (item != "api" && item != "new" && item != "") return item;
    //     return "";
    // });

    // const newPath = path.filter((item) => item.length > 0);

    // if (newPath.length != 2) {
    //     return NextResponse.json({ "error": "Something went wrong" });
    // }

    // const postType = newPath[0];
    // const postId = newPath[1];

    // console.log(newPath);

    const post = await getPostByID("project", params.id);
    return NextResponse.json(post);
}
