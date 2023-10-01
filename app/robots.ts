import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/center/project/*",
                "/center/project/",
                "/for_students/training/*",
                "/for_students/training/",
                "/for_students/cases/*",
                "/for_students/cases/",
                "/nko/partner/*",
                "/nko/partner/",
            ],
        },
    };
}
