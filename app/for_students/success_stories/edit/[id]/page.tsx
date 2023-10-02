import { EditSuccessStoryForm } from "@/components/CRUD/Forms/Edit/EditSuccessStoryForm";
import { FaunadbPostOrError, GeneralPostProps, SuccessStory } from "@/types";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getSuccessStoryById(params: { id: string }) {
    if (!params.id) return null;

    const res = await fetch(
        `${process.env.API_URL}/api/success_story/${params.id}`
    );

    if (!res) {
        throw new Error("Невозможно получить пост");
    }

    const data: FaunadbPostOrError<SuccessStory> = await res.json();

    return data;
}

export default async function Edit({ params }: { params: { id: string } }) {
    const data = await getSuccessStoryById(params);

    if (!data || !data.post) return notFound();

    if (!!data?.errors) {
        throw new Error(JSON.stringify({ errors: data.errors }));
    }

    return <EditSuccessStoryForm post={data.post} />;
}
