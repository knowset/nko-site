import { AdminCreateButton } from "@/components/AdminCreateButton";
import GeneralFeed from "@/components/GeneralFeed";
import { Suspense } from "react";

export default async function Projects() {
    return (
        <Suspense fallback={<p>loading feed...</p>}>
            <main className="">
                <AdminCreateButton />
                <GeneralFeed postType="project" />
            </main>
        </Suspense>
    );
}