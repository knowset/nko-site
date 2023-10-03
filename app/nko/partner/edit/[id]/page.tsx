import { EditPartnerForm } from "@/components/CRUD/Forms/Edit/EditPartnerForm";
import { FaunadbPostOrError, Partner } from "@/types";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getPartnerById(params: { id: string }) {
    if (!params.id) return null;

    const res = await fetch(`${process.env.API_URL}/api/partner/${params.id}`);

    if (!res) {
        throw new Error("Невозможно получить пост");
    }

    const data: FaunadbPostOrError<Partner> = await res.json();

    return data;
}

export default async function Edit({ params }: { params: { id: string } }) {
    const data = await getPartnerById(params);

    if (!data || !data.post) return notFound();

    if (!!data?.errors) {
        throw new Error(JSON.stringify({ errors: data.errors }));
    }

    return <EditPartnerForm post={data.post} />;
}
