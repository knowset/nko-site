import { cache } from "react";

export const getAllPosts = async () => {
    const response = await fetch(`${process.env.DOMAIN}/api/project`);

    if (!response.ok) throw new Error("Unable to fetch posts.");
    const data = await response.json();
    return data;
};

// export const revalidate = 360;

export const getPostById = cache(async (id: string) => {
    console.log("HERERE", id);
    const response = await fetch(`${process.env.DOMAIN}/api/project/${id}`);
    console.log("RESPONSE1: ", response);
    if (!response.ok) throw new Error("Unable to fetch posts.");
    const data = await response.json();
    console.log("DATA1: ", data);
    return data;
});
