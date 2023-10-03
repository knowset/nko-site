import { PartnerDetail } from "@/components/Partner/PartnerDetail";
import { FaunadbPostOrError, Partner } from "@/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

export const revalidate = 43200;

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const data = await getParnersById(params);

    let title: string = "";
    let preview_url: string = "";

    if (data && data.post) {
        title = data.post.data.title;
        preview_url = `https://drive.google.com/thumbnail?id=${
            data.post.data.images_ids[0]
        }&sz=w${2000}-h${2000}`;
    }

    return {
        metadataBase: new URL("https://initsiativa.vercel.app"),
        title: title,
        openGraph: {
            url: "https://initsiativa.vercel.app/",
            type: "website",
            title: title,
            images: [preview_url],
        },
        twitter: {
            title: title,
            card: "summary_large_image",
            images: [preview_url],
        },
    };
}

const getParnersById = cache(async (params: { id: string }) => {
    if (!params.id) return null;

    const res = await fetch(`${process.env.API_URL}/api/partner/${params.id}`);

    if (!res) {
        throw new Error("Невозможно получить пост");
    }

    const data: FaunadbPostOrError<Partner> = await res.json();

    return data;
});

export default async function page({ params }: { params: { id: string } }) {
    const data = await getParnersById(params);

    if (!data || !data.post) return notFound();

    if (!!data?.errors) {
        return null;
    }

    return <PartnerDetail post={data.post} />;
}
