import {
    Children,
    cloneElement,
    FC,
    Fragment,
    ReactNode,
    useCallback,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useComponentVisible } from "@/hooks/handleHideDropdown";
import { NavLink } from "./NavLink";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
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
        contentWidth: {
            default: "",
            mobile: "object-left w-[100vw-5px]",
        },
        defaultVariants: {
            variant: "default",
        },
    },
});

type TriggerProps = {
    children: ReactNode;
};

type ContentProps = {
    children: ReactNode;
};

type DropDownMenuSubComponentsProps = {
    Trigger: FC<TriggerProps>;
    Content: FC<ContentProps>;
};

interface DropDownMenuProps extends VariantProps<typeof ddmVariants> {
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

export const DropDownMenu: FC<DropDownMenuProps> &
    DropDownMenuSubComponentsProps = ({
    children,
    variant = "default",
    contentWidth = "default",
}) => {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);

    const toggleMenu = useCallback(() => {
        setIsComponentVisible((current: boolean) => !current);
    }, []);
    const trigger = Children.map(children, (child: any, index) => {
        return child.type.displayName === TRIGGER_DISPLAY_NAME ? child : null;
    });

    const content = Children.map(children, (child: any, index) => {
        return child.type.displayName === CONTENT_DISPLAY_NAME ? child : null;
    });

    return (
        <div
            ref={ref}
            className={`${isComponentVisible ? "z-50 " : ""}relative`}
        >
            <div onClick={toggleMenu}>{trigger}</div>

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
                            {content}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

const Trigger: FC<TriggerProps> = ({ children }) => {
    return <>{children}</>;
};
const TRIGGER_DISPLAY_NAME = "DROPDOWNMENU_TRIGGER";
Trigger.displayName = TRIGGER_DISPLAY_NAME;
DropDownMenu.Trigger = Trigger;

const Content: FC<ContentProps> = ({ children }) => {
    return <>{children}</>;
};
const CONTENT_DISPLAY_NAME = "DROPDOWNMENU_CONTENT";
Content.displayName = CONTENT_DISPLAY_NAME;
DropDownMenu.Content = Content;
