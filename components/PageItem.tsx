"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { FC } from "react";
import { ProjectDetail } from "./Project/ProjectDetail";
import { ProjectList } from "./Project/ProjectList";

export const PageItem: FC<{}> = () => {
    const searchParams = useSearchParams();
    const path = usePathname();

    if (searchParams.has("p")) {
        switch (path) {
            case "/project":
                return <ProjectDetail />;
        }
    }
    switch (path) {
        case "/project":
            return <ProjectList />;
    }

    return null;
};
