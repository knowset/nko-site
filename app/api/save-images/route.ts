import { NextRequest, NextResponse } from "next/server";
import driveService from "@/configs/google";
import { Readable, Stream } from "stream";

async function stream2buffer(stream: Stream): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
        const _buf = Array<any>();

        stream.on("data", (chunk) => _buf.push(chunk));
        stream.on("end", () => resolve(Buffer.concat(_buf)));
        stream.on("error", (err) => reject(`error converting stream - ${err}`));
    });
}

export async function POST(req: Request) {
    let formData = await req.formData();

    const file = formData.get("file") as File;
    
    if (!file) return NextResponse.json("");

    const ab = await file.arrayBuffer();
    const bf = Buffer.from(ab);
    const stream = Readable.from(bf);

    const res = await driveService.files.create({
        requestBody: {
            name: file.name,
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

    console.log("RES", res);
    const id = res.data.id;

    return NextResponse.json({ id: id });
}
