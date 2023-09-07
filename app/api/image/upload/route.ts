import { NextResponse } from "next/server";
import driveService from "@/configs/google";
import { Readable } from "stream";

export async function POST(req: Request) {
    let formData = await req.formData();

    const file = formData.get("file") as File;
    const postType = formData.get("postType") as string;
    const title = formData.get("title") as string;

    if (!file) return NextResponse.json("Something went wront!");

    const ab = await file.arrayBuffer();
    const bf = Buffer.from(ab);
    const stream = Readable.from(bf);

    const imageName = `${postType}-[${title}]-[${new Date().toDateString()}]`;

    const res = await driveService.files.create({
        requestBody: {
            name: imageName,
            parents: ["1VQJm8jw3lO1Z3VIiY7HbpamIZ409NoMZ"],
            mimeType: file.type,
        },
        uploadType: "media",
        media: {
            mimeType: file.type,
            body: stream,
        },
        fields: "id",
    });

    const id = res.data.id;

    return NextResponse.json({ id: id });
}
