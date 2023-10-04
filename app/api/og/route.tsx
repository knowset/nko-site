import type { NextRequest } from "next/server";
import { ImageResponse } from "next/server";

export const runtime = "edge";

const logo = fetch(new URL("./logo.png", import.meta.url)).then((res) =>
    res.arrayBuffer()
);

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
    try {
        const { searchParams } = new URL(req.url);
        const isLight =
            req.headers.get("Sec-CH-Prefers-Color-Scheme") === "light";

        const title = searchParams.has("title")
            ? searchParams.get("title")
            : "";

        return new ImageResponse(
            (
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: isLight ? "white" : "#161618",
                        width: "100%",
                        height: "100%",
                        gap: 100,
                    }}
                >
                    <img
                        // @ts-expect-error
                        src={await logo}
                        style={{
                            width: 450,
                            height: 450,
                        }}
                    />
                    <div
                        style={{
                            width: 450,
                            height: 450,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            padding: 25,
                            color: "rgb(0,158,224)",
                            fontSize: 48,
                            fontWeight: 600,
                        }}
                    >
                        {title?.split("/").join(" / ")}
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            }
        );
    } catch (e) {
        if (!(e instanceof Error)) throw e;

        // eslint-disable-next-line no-console
        console.log(e.message);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
