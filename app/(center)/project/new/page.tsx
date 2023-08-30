import { CreatePostForm } from "@/components/CRUD/Forms/CreateProjectForm";

export default async function NewProject() {
    
    return (
        <main className="">
            <div>
                <CreatePostForm title="Создание нового проекта" type="project"/>        
            </div>
        </main>
    );
}