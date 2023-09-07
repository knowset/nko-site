import driveService from "@/configs/google";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
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
