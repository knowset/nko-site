import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://initsiativa.vercel.app",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 1,
        },
        {
            url: "https://initsiativa.vercel.app/about_the_center",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.8,            
        },
        {
            url: "https://initsiativa.vercel.app/documentation",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.8,
        },
        {
            url: "https://initsiativa.vercel.app/contacts",
            lastModified: new Date(),
            changeFrequency: "never",
            priority: 0.8,
        }

    ]
}