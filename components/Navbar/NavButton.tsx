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
            className="group uppercase hover:bg- rounded py-2 px-4 font-medium text-base"
        >
            <p
                className={` bg-gradient-to-r from-blue-400 to-blue-400 ${
                    isActive ? "bg-[length:100%_2px]" : "bg-[length:0px_0px]"
                } bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]`}
            >
                {title}
            </p>
        </button>
    );
};
