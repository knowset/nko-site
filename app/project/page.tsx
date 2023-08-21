import { AdminCreateButton } from "@/components/AdminCreateButton";
import { PostList } from "@/components/PostList";

export default async function Project() {
    
    return (
        <main className="">
            <AdminCreateButton />
            <PostList postType="project"/>
        </main>
    );
}
