import { FC, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useComponentVisible } from "@/hooks/handleHideDropdown";
import { NavLink } from "../Navbar/NavLink";
import { usePathname } from "next/navigation";
import { NavButton } from "../Navbar/NavButton";

interface DDMProps {
    section: {
        title: string;
        links?: { title: string; href: string }[];
    };
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

export const DropDownMenu: FC<DDMProps> = ({ section }) => {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);

    const toggleMenu = useCallback(() => {
        setIsComponentVisible((current: boolean) => !current);
    }, []);
    const path = usePathname();
    // const isActive = !!section.links.find((link) => link.href == path);

    let isActive = false;
    if (section.links) {
        isActive = !!section.links.find((link) => link.href == path);
    }

    return (
        <div
            ref={ref}
            className={`${isComponentVisible ? "z-50" : ""}  relative`}
        >
            <NavButton
                type="button"
                isActive={isActive}
                onClick={toggleMenu}
                title={section.title}
                aria-expanded="false"
            />

            <AnimatePresence>
                {isComponentVisible && (
                    <>
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="absolute left-0 -translate-x-[45vw] mt-1 md:left-1/2 md:-translate-x-1/2 transform z-50"
                        >
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                                {!!section.links ? (
                                    <div className="flex flex-col gap-3 px-4 py-2">
                                        {section.links.map((link) => (
                                            <NavLink
                                                key={"ddm-link-" + link.title}
                                                title={link.title}
                                                href={link.href}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        <p className="rounded py-1 md:py-2 md:px-4 font-medium text-base text-zinc-500">
                                            Раздел появится в ближайшее время
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
