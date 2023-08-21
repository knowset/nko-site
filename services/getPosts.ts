import { cache } from "react";

export const getAllPosts = async () => {
    const response = await fetch(`${process.env.DOMAIN}/api/project`);

    if (!response.ok) throw new Error("Unable to fetch posts.");
    const data = await response.json();
    return data;
};

export const revalidate = 360;

export const getPostById = cache(async (id: string) => {
    const response = await fetch(`${process.env.DOMAIN}/api/project/${id}`);

    if (!response.ok) throw new Error("Unable to fetch posts.");
    const data = await response.json();
    return data;
});
