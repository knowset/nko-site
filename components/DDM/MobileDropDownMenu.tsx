import { FC, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useComponentVisible } from "@/hooks/handleHideDropdown";
import { NavItem } from "../Navbar/NavItem";
import { usePathname } from "next/navigation";
import { NavButton } from "../Navbar/NavButton";

interface DDMProps {
    navlinks: {
        title: string;
        links?: { title: string; href: string }[];
    }[];
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

export const MobileDropDownMenu: FC<DDMProps> = ({ navlinks }) => {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);

    const toggleMenu = useCallback(() => {
        setIsComponentVisible((current: boolean) => !current);
    }, []);
    const path = usePathname();
    // const isActive = !!section.links.find((link) => link.href == path);

    return (
        <div
            ref={ref}
            className={`${isComponentVisible ? "z-50" : ""}  relative`}
        >
            <NavButton
                type="button"
                isActive={true}
                onClick={toggleMenu}
                title="Меню"
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
                            className="absolute left-0 mt-1 w-[90vw] -translate-x-[35vw] md:left-1/2 md:-translate-x-1/2 transform z-50"
                        >
                            <div className=" grid grid-cols-2 gap-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white p-2">
                                {navlinks.map((section) => (
                                    <div
                                        key={"mddm-section-" + section.title}
                                        className="flex flex-col gap-1 p-2"
                                    >
                                        <p className="text-blue-500 mb-1">
                                            {section.title}
                                        </p>
                                        {!!section.links ? (
                                            section.links.map((link) => (
                                                <NavItem
                                                    key={
                                                        "mddm-link-" +
                                                        link.title
                                                    }
                                                    title={link.title}
                                                    href={link.href}
                                                />
                                            ))
                                        ) : (
                                            <p className="rounded py-1 md:py-2 md:px-4 font-medium text-base text-zinc-500">
                                                Раздел появится в ближайшее
                                                время
                                            </p>
                                        )}
                                    </div>
                                ))}
                                <div className="flex flex-col gap-1 p-2">
                                    <p className="text-blue-500 mb-1">Другое</p>
                                    <NavItem title="Главная" href="/" />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
