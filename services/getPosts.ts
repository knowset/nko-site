export const getAllPosts = async () => {
    const response = await fetch(`${process.env.DOMAIN}/api/project`);

    if (!response.ok) throw new Error("Unable to fetch posts.");
    const data = await response.json();
    return data;
};
