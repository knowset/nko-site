import { NKOList } from "@/components/NKO/NKOList";
import { FaunadbPostsOrError, GeneralPostProps, NKO } from "@/types";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: "НКО",
    openGraph: {
        url: "https://initsiativa.vercel.app/project",
        type: "website",
        title: "НКО",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
    twitter: {
        title: "НКО",
        card: "summary_large_image",
        images: [
            "https://lh3.googleusercontent.com/drive-viewer/AITFw-wQdxHUjICxBaZqShpzDaNDfmrkDviimp5G2kGqU6QBLcmQdKtwOg6SD35aG5D_P8SqhuQ8BfgDTTgXBUI80w551O7V-g=s1600",
        ],
    },
};

async function getProjects() {
    const res = await fetch(`${process.env.API_URL}/api/nko`);

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<NKO & GeneralPostProps> = await res.json();

    return data;
}

export default async function Page() {
    const data = await getProjects();

    if (!data) return null;

    if (!data.posts) return null;

    return <NKOList posts={data.posts} />;
}
