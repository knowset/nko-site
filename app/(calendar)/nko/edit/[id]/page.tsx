import { EditNKOForm } from "@/components/CRUD/Forms/Edit/EditNKOForm";
import { FaunadbPostOrError, GeneralPostProps, NKO } from "@/types";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getProjectById(params: { id: string }) {
    if (!params.id) return null;

    const res = await fetch(`${process.env.API_URL}/api/nko/${params.id}`);

    if (!res) {
        throw new Error("Невозможно получить пост");
    }

    const data: FaunadbPostOrError<NKO & GeneralPostProps> = await res.json();

    return data;
}

export default async function Edit({ params }: { params: { id: string } }) {
    const data = await getProjectById(params);

    if (!data || !data.post) return notFound();

    if (!!data?.errors) {
        throw new Error(JSON.stringify({ errors: data.errors }));
    }

    return <EditNKOForm post={data.post} />;
}
