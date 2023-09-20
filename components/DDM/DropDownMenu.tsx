import { Children, FC, ReactNode, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useComponentVisible } from "@/hooks/handleHideDropdown";
import { NavLink } from "../Navbar/NavLink";
import { usePathname } from "next/navigation";
import { Button } from "../Button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ddmVariants = cva("mt-1 transform z-50", {
    variants: {
        variant: {
            default:
                "absolute left-0 -translate-x-[45vw] md:left-1/2 md:-translate-x-1/2 transform",
            right: "absolute right-0",
            left: "absolute left-0",
            fixedLeft: "fixed left-0",
        },
        triggerType: {
            default: "",
            asLink: "",
        },
        contentWidth: {
            default: "",
            mobile: "object-left w-[100vw-5px]",
        },
        defaultVariants: {
            variant: "default",
        },
    },
});

interface DDMProps extends VariantProps<typeof ddmVariants> {
    title: any;
    children: ReactNode;
}

const menuVariants = {
    open: {
        opacity: 1,
        height: "100%",
    },
    closed: {
        opacity: 0,
        height: "0",
    },
};

export const DropDownMenu: FC<DDMProps> = ({
    title,
    children,
    variant = "default",
    contentWidth = "default",
    triggerType = "default",
}) => {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);

    const toggleMenu = useCallback(() => {
        setIsComponentVisible((current: boolean) => !current);
    }, []);

    return (
        <div
            ref={ref}
            className={`${isComponentVisible ? "z-50 " : ""}relative`}
        >
            <Button
                type="button"
                onClick={toggleMenu}
                aria-expanded="false"
                variant={triggerType}
            >
                {title}
            </Button>

            <AnimatePresence>
                {isComponentVisible && (
                    <>
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className={cn(
                                ddmVariants({
                                    variant,
                                    contentWidth,
                                })
                            )}
                        >
                            {/* <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-zinc-800"> */}
                                {children}
                            {/* </div> */}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
