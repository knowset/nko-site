import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

const buttonVariants = cva("", {
    variants: {
        variant: {
            default: "",
            asLink: "bg-gradient-to-r from-[rgb(0,158,224)] to-[rgb(0,158,224)] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 bg-[length:0%_0px] hover:bg-[length:100%_2px] group-hover:bg-[length:100%_2px]",
        },
        defaultVariants: {
            variant: "default",
        },
    },
});

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
    children,
    variant = "default",
    ...props
}) => {
    return (
        <button {...props} className="group font-medium text-base whitespace-nowrap">
            <span className={cn(buttonVariants({ variant }))}>{children}</span>
        </button>
    );
};
