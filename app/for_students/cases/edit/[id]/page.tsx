import { EditCaseForm } from "@/components/CRUD/Forms/Edit/EditCaseForm";
import { FaunadbPostOrError, Case } from "@/types";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getCaseById(params: { id: string }) {
    if (!params.id) return null;

    const res = await fetch(`${process.env.API_URL}/api/case/${params.id}`);
    console.log(res);
    if (!res) {
        throw new Error("Невозможно получить пост");
    }

    const data: FaunadbPostOrError<Case> = await res.json();

    return data;
}

export default async function Edit({ params }: { params: { id: string } }) {
    const data = await getCaseById(params);
    if (!data || !data.post) return notFound();

    if (!!data?.errors) {
        throw new Error(JSON.stringify({ errors: data.errors }));
    }

    return <EditCaseForm post={data.post} />;
}
