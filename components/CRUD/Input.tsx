import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";

const inputVariants = cva(
    "flex items-center bg-primary-light dark:bg-primary-dark rounded focus:outline-none focus:ring-2 text-lg"
);

type InputProps = {
    title: string;
    inputType?: string;
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> &
    VariantProps<typeof inputVariants>;

export const Input: FC<InputProps> = ({
    title,
    inputType = "input",
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
        </div>
    );
};

{
    /* <div>
    <label>Конец</label>
    <input
        value={formValues.end_of_the_implementation_period}
        onChange={handleChange}
        type="date"
        name="end_of_the_implementation_period"
        required
        className="flex items-center h-12 px-4 w-full bg-gray-200 rounded focus:outline-none focus:ring-2"
    />
</div> */
}

// inputType == "input" ? (
//     <input
//         {...props}
//         className="h-12 px-4 mt-2"
//     />
// ) : (
//     <textarea
//         {...props}
//         className={`${height} p-4 rounded focus:outline-none focus:ring-2 text-lg`}
//     />
// )}
// </div>
