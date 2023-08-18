import { useEffect, useRef, useState } from "react";

export const useComponentVisible = (initialIsVisible: any) => {
    const [isComponentVisible, setIsComponentVisible] =
        useState(initialIsVisible);
    const [scroll, setScroll] = useState(0);
    const [lastScroll, setLastScroll] = useState(0);
    const ref = useRef(null);

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (event: any) => {
        if (ref.current && !(ref.current as any).contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        setScroll(winScroll);
        if (winScroll !== lastScroll) {
            setIsComponentVisible(false);
        }
    };

    return { ref, isComponentVisible, setIsComponentVisible };
};
