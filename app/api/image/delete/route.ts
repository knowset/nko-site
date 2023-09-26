import driveService from "@/configs/google";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const token = await getToken({ req });

    if (token && token.role === "admin") {
        try {
            const { id } = (await req.json()) as { id: string };
            if (!id) {
                return NextResponse.json("");
            }
            const res = await driveService.files.delete({
                fileId: id,
            });
            return NextResponse.json(res);
        } catch (err: any) {
            return NextResponse.json({
                status: err.status,
                errors: err.errors.map((error: any) => {
                    return { message: error.message };
                }),
            });
        }
    }

    return NextResponse.json({
        status: 1020,
        errors: [
            {
                message: "Отказано в доступе",
            },
        ],
    });
}
