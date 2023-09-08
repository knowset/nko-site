import { ProjectList } from "@/components/Project/ProjectList";
import { FaunadbPostsOrError, Project } from "@/types";

export const metadata = {
    title: "Проекты | Ресурсный центр НКО ВоГУ 'Инициатива'",
    description: "",
};

async function getProjects() {
    const res = await fetch(`${process.env.API_URL}/api/project`);

    if (!res.ok) {
        throw new Error("Невозможно получить посты");
    }

    const data: FaunadbPostsOrError<Project> = await res.json();

    return data;
}

export default async function Page() {
    const data = await getProjects();

    if (!data.posts) return null;

    return <ProjectList posts={data.posts} />;
}
