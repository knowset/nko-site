import { getPostById } from "@/services/getPosts";

export const preload = (id: string) => {
    // void evaluates the given expression and returns undefined
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
    void getPostById(id);
};
export default async function Item({ id }: { id: string }) {
    const result = await getPostById(id);
    console.log(result);
    

    return <div>hui</div>;
}
