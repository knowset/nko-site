import { PostDetail } from "@/components/PostDetail";
import { getPostByID } from "@/faunadb/functions";

export const dynamicParams = true;

type Props = {
    params: { id: string };
};


export default async function Project({ params }: Props) {
    const data = await getPostByID("project", params.id);

    if (!data || !data.post) return <div>Пост не найден</div>;
    return <PostDetail post={data.post}/>
}
