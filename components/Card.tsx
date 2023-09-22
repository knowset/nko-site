import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Children, FC, ReactElement, ReactNode, HTMLAttributes } from "react";

const cardVariants = cva(
    "flex flex-col items-center overflow-hidden rounded-lg shadow-lg border border-border-light dark:border-border-dark bg-primary-light dark:bg-primary-dark"
);

const cardContentVariants = cva("text-center");

type CardProps = {
    children: ReactElement | ReactElement[];
    className?: string;
};

type ImageProps = {
    children: ReactNode;
};

type ContentProps = {
    children: ReactNode;
    className?: string;
};

type CardSubChildrenProps = {
    Image: FC<ImageProps>;
    Content: FC<ContentProps>;
};

export const Card: FC<CardProps> & CardSubChildrenProps = ({
    children,
    className,
}) => {
    const image = Children.map(children, (child: any, index) => {
        return child.type.displayName === "CARD_IMAGE" ? child : null;
    });
    const content = Children.map(children, (child: any, index) => {
        return child.type.displayName === "CARD_CONTENT" ? child : null;
    });
    return (
        <div className={cn(cardVariants({ className }))}>
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
