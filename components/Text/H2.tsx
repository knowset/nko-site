import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, ReactNode, AllHTMLAttributes } from "react";

const h2Variants = cva("", {
    variants: {
        size: {
            medium: "text-lg",
            big: "text-xl",
        },
        defaultVariants: {
            size: "medium",
        },
    },
});

interface H2Props extends VariantProps<typeof h2Variants> {
    children: ReactNode;
    className?: string;
}

export const H2: FC<H2Props> = ({
    children,
    size = "medium",
    className = "",
}) => {
    return (
        <h2 className={cn(h2Variants({ className: className, size: size }))}>
            {children}
        </h2>
    );
};
