import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, ReactNode } from "react";

const h1Variants = cva("font-extrabold text-main", {
    variants: {
        size: {
            default: "text-2xl",
            big: "text-3xl lg:text-4xl",
        },
        defaultVariants: {
            size: "default",
        },
    },
});

interface H1Props extends VariantProps<typeof h1Variants> {
    children: ReactNode;
    className?: string;
}

export const H1: FC<H1Props> = ({
    children,
    size = "default",
    className = "",
}) => {
    return (
        <h1 className={cn(h1Variants({ className: className, size: size }))}>
            {children}
        </h1>
    );
};
