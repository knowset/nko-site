import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";

const inputVariants = cva(
    "flex items-center bg-primary-light dark:bg-primary-dark rounded focus:outline-none focus:ring-2 text-lg"
);

type InputProps = {
    title: string;
    inputType?: string;
    errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> &
    VariantProps<typeof inputVariants>;

export const Input: FC<InputProps> = ({
    title,
    inputType = "input",
    errorMessage = "",
    className,
    ...props
}) => {
    let _input;
    switch (inputType) {
        case "input":
            _input = (
                <input
                    {...props}
                    className={cn(
                        inputVariants({ className: "h-12 px-4 " + className })
                    )}
                />
            );
            break;
        case "textarea":
            _input = (
                <textarea
                    {...props}
                    className={cn(
                        inputVariants({
                            className: "h-40 px-4 py-2 " + className,
                        })
                    )}
                />
            );
            break;
        case "date":
            _input = (
                <input
                    {...props}
                    className={cn(
                        inputVariants({ className: "h-12 px-4 " + className })
                    )}
                />
            );
            break;
        default:
            _input = null;
            break;
    }

    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold text-base">{title}</label>
            {_input}
            <div className="h-4 text-red-500">
                {!!errorMessage ? errorMessage : null}
            </div>
        </div>
    );
};
