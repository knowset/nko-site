import { getAllPosts } from "@/faunadb/functions";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    const posts = await getAllPosts("project");
    console.log(posts.data);
    return NextResponse.json({ posts: posts.data });
}