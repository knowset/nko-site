import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Children, FC, ReactElement, ReactNode } from "react";

const cardVariants = cva(
    "flex flex-col items-center overflow-hidden rounded-lg shadow-lg border border-border-light dark:border-border-dark bg-primary-light dark:bg-primary-dark",
    {
        variants: {
            height: {
                xl: "",
                md: "min-h-[772px] sm:min-h-[698px] md:min-h-[292px]",
                sm: "min-h-[224px] md:min-h-[172px]",
            },
        },
        defaultVariants: {
            height: "xl",
        },
    }
);

const cardContentVariants = cva("text-center");

type CardProps = {
    children: ReactElement | ReactElement[];
    className?: string;
} & VariantProps<typeof cardVariants>;

type ImageProps = {
    children: ReactNode;
};

type ContentProps = {
    children: ReactNode;
    className?: string;
};

type CardSubComponentsProps = {
    Image: FC<ImageProps>;
    Content: FC<ContentProps>;
};

export const Card: FC<CardProps> & CardSubComponentsProps = ({
    children,
    className,
    height,
}) => {
    const image = Children.map(children, (child: any, index) => {
        return child.type.displayName === "CARD_IMAGE" ? child : null;
    });
    const content = Children.map(children, (child: any, index) => {
        return child.type.displayName === "CARD_CONTENT" ? child : null;
    });
    return (
        <div className={cn(cardVariants({ className, height }))}>
            {image}
            {content}
        </div>
    );
};

const Image: FC<ImageProps> = ({ children }) => {
    return <>{children}</>;
};
Image.displayName = "CARD_IMAGE";
Card.Image = Image;

const Content: FC<ContentProps> = ({ children, className }) => {
    return (
        <div className={cn(cardContentVariants({ className }))}>{children}</div>
    );
};
Content.displayName = "CARD_CONTENT";
Card.Content = Content;
