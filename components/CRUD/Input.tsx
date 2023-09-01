import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    title: string;
    inputType?: string;
    height?: string;
}

export const Input: FC<InputProps> = ({ title, inputType = "input", height = "h-40", ...props }) => {
    return (
        <div>
            <label className="font-semibold text-base">{title}</label>
            {inputType == "input" ? (
                <input 
                {...props}
                className="flex items-center h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-lg"
                />
            ) : (
                <textarea
                    {...props}
                    className={`flex items-center ${height} p-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 text-lg`}
                />
            )}
        </div>
    );
};
