"use client";

import { LoadingPostDetail } from "@/components/LoadingPostDetail";
import { notFound, usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { EditProjectForm } from "../Forms/Edit/EditProjectForm";

type ReturnedData = {
    post: any;
};

export const EditPage: FC<{}> = ({}) => {
    const searchParams = useSearchParams();
    const path = usePathname();
    const postId: string | null = searchParams.get("p");
    const [data, setData] = useState({} as ReturnedData);
    const [isLoading, setisLoading] = useState(true);

    if (!!!postId) {
        return notFound();
    }

    useEffect(() => {
        const retrievData = async () => {
            if (isLoading) {
                const res = await fetch(
                    `/api/${path.split("/")[1]}/${searchParams.get("p")}`
                );

                if (!res) {
                    throw new Error("Невозможно получить пост");
                }

                const data: ReturnedData = await res.json();

                setisLoading(false);
                if (!data || !data.post) {
                    setData({} as ReturnedData);
                }

                setData(data.post);
            }
            setisLoading(false);
        };
        retrievData();
    }, [data]);

    if (isLoading) {
        return <LoadingPostDetail />;
    }

    switch (path) {
        case "/project/edit":
            return <EditProjectForm project={data as never} />;
    }

    return null;
};
