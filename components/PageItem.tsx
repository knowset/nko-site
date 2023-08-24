"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";
import { PostDetail } from "./PostDetail";
import { PostList } from "./PostList";


export const PageItem: FC<{}> = () => {
    const searchParams = useSearchParams();
    const path = usePathname();

    if (searchParams.has("p")) {
        return <PostDetail />
    }

    return <PostList postType={path}/>;
};
