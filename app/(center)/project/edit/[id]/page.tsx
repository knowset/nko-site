import { EditProjectForm } from "@/components/CRUD/Forms/Edit/EditProjectForm";
import { FaunadbPostOrError, Project } from "@/types";
import { notFound } from "next/navigation";

async function getProjectById(params: { id: string }) {
    if (!params.id) return null;

    const res = await fetch(`${process.env.API_URL}/api/project/${params.id}`);

    if (!res) {
        throw new Error("Невозможно получить пост");
    }

    const data: FaunadbPostOrError<Project> = await res.json();

    return data;
}

export default async function Edit({ params }: { params: { id: string } }) {
    const data = await getProjectById(params);

    if (!data || !data.post) return notFound();

    if (!!data?.errors) {
        throw new Error(JSON.stringify({ errors: data.errors }));
    }

    return <EditProjectForm project={data.post} />;
}
