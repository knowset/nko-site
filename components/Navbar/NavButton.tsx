import { ButtonHTMLAttributes, FC } from "react";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isActive: boolean;
}

export const NavButton: FC<NavButtonProps> = ({
    title,
    isActive,
    ...props
}) => {
    return (
        <button
            {...props}
            className="group uppercase font-medium text-base"
        >
            <p
                className={` bg-gradient-to-r from-[rgb(0,158,224)] to-[rgb(0,158,224)] ${
                    isActive ? "bg-[length:100%_2px]" : "bg-[length:0px_0px]"
                } bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]`}
            >
                {title}
            </p>
        </button>
    );
};
