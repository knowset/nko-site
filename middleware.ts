import type { NextRequest } from "next/server";

export { default } from "next-auth/middleware";

export const config = { matcher: ["/project/new"] }
