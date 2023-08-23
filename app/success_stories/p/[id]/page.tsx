import { PostDetail } from "@/components/PostDetail";
import { getPostByID } from "@/faunadb/functions";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store"

type Props = {
    params: { id: string };
};


export default async function SuccessStory({ params }: Props) {
    const data = await getPostByID("success_stories", params.id);

    if (!data || !data.post) return <div>bubs</div>;
    return <PostDetail post={data.post}/>
}
