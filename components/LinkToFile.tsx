import { FC } from "react";
import { H2 } from "./Text/H2";

type LinkToFileProps = {
    text: string;
    fileFormat: string;
    href: string;
};

export const LinkToFile: FC<LinkToFileProps> = ({ text, fileFormat, href }) => {
    return (
        <H2>
            {text}{" "}
            <a
                className="text-main hover:text-main-hover"
                href={"https://drive.google.com/uc?export=view&id=" + href}
            >
                (скачать {fileFormat})
            </a>
        </H2>
    );
};
