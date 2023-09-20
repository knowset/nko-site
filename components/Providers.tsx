"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <ThemeProvider {...props}>
            <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
    );
};
