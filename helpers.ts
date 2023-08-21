export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const getBaseURL = () => {
    return process.env.DOMAIN || "http://localhost:8888";
};
