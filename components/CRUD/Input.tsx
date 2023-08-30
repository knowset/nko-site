import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
}

export const Input: FC<InputProps> = ({ title, ...props }) => {
    return (
        <div>
            <label className="font-semibold text-base">{title}</label>
            <input
                {...props}
                className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            />
        </div>
    );
};
