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

        const splitedTitle = !!title ? title.split("/") : [""];

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
                        gap: 50,
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
                    <span
                        style={{
                            backgroundColor: isLight
                                ? "#c2c2c4"
                                : "rgba(82,82,89,0.68)",
                            height: 450,
                            width: 1,
                        }}
                    ></span>
                    <div
                        style={{
                            width: 450,
                            height: 450,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            color: "rgb(0,158,224)",
                            fontSize: 48,
                            fontFamily: "sans-serif",
                            fontWeight: "bolder",
                        }}
                    >
                        {splitedTitle.map((item, index) => (
                            <div style={{ display: "flex", gap: 16 }}>
                                <div>{item}</div>
                                {index !== splitedTitle.length - 1 ? (
                                    <span
                                        style={{
                                            color: isLight
                                                ? "#c2c2c4"
                                                : "rgba(82,82,89,0.68)",
                                        }}
                                    >
                                        /
                                    </span>
                                ) : null}
                            </div>
                        ))}
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
