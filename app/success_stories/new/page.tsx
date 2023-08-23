import { CreatePostForm } from "@/components/CreatePostForm";

export default async function NewSuccessStory() {
    
    return (
        <main className="">
            <div>
                <CreatePostForm title="Создание новой статьи" type="success_stories"/>        
            </div>
        </main>
    );
}