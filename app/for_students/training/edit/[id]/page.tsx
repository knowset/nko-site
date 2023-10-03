import { EditTrainingForm } from "@/components/CRUD/Forms/Edit/EditTrainingForm";
import { FaunadbPostOrError, Training } from "@/types";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getTrainingById(params: { id: string }) {
    if (!params.id) return null;

    const res = await fetch(`${process.env.API_URL}/api/training/${params.id}`);

    if (!res) {
        throw new Error("Невозможно получить пост");
    }

    const data: FaunadbPostOrError<Training> = await res.json();

    return data;
}

export default async function Edit({ params }: { params: { id: string } }) {
    const data = await getTrainingById(params);
    if (!data || !data.post) return notFound();

    if (!!data?.errors) {
        throw new Error(JSON.stringify({ errors: data.errors }));
    }

    return <EditTrainingForm post={data.post} />;
}
