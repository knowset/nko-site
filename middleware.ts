import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });

    if (!token) {
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }
}

export const config = {
    matcher: [
        "/center/project/new",
        "/center/project/edit",
        "/partners/new",
        "/partners/edit",
        "/for_students/training/new",
        "/for_students/training/edit",
        "/for_students/cases/new",
        "/for_students/cases/edit",
        "/for_students/success_stories/new",
        "/for_students/success_stories/edit",
        "/calendar/for_students/new",
        "/calendar/for_students/edit",
        "/auth/register",
    ],
};
