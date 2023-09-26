import { FC, FormHTMLAttributes, ReactNode } from "react";

type FormLayoutProps = {
    title: string;
    children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const FormLayout: FC<FormLayoutProps> = ({
    children,
    title,
    ...props
}) => {
    return (
        <div className="flex justify-center w-full">
            <form
                className="flex flex-col bg-secondary-light dark:bg-secondary-dark rounded shadow-lg py-8 px-8 mt-12 gap-4 w-full sm:w-[90%] lg:w-[80%] xl:w-[70]"
                {...props}
            >
                <label className="font-semibold text-xl text-center">
                    {title}
                </label>
                <hr className="my-4 border-border-light dark:border-border-dark" />
                {children}
            </form>
        </div>
    );
};
