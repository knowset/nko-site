import { AdminCreateButton } from "@/components/AdminCreateButton";
import { PageItem } from "@/components/PageItem";
import { PostList } from "@/components/PostList";
import { Suspense } from "react";

export const metadata = {
    title: "Проекты | Ресурсный центр НКО ВоГУ 'Инициатива'",
    description: "",
};

export default async function Projects() {
    return (
        // <Suspense fallback={<p>loading feed...</p>}>
        //     <main className="">
        //         <AdminCreateButton />
        //         <PostList postType="project" />
        //     </main>
        // </Suspense>
        <>
            <PageItem />
        </>
    );
}
