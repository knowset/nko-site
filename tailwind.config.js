/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],

    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        screens: {
            "2xs": "320px",
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1920px",
        },

        extend: {
            colors: {
                "primary-light": "#ffffff",
                "secondary-light": "#eeeef0",
                "primary-dark": "#161618",
                "secondary-dark": "#1e1e20",
                "border-light": "#c2c2c4",
                "border-dark": "rgba(82,82,89,0.68)",
                main: "rgb(0,158,224)",
                "main-hover": "rgb(0,140,201)",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            // keyframes: {
            //     "accordion-down": {
            //         from: { height: 0 },
            //         to: { height: "var(--radix-accordion-content-height)" },
            //     },
            //     "accordion-up": {
            //         from: { height: "var(--radix-accordion-content-height)" },
            //         to: { height: 0 },
            //     },
            //     slideDownAndFade: {
            //         from: { opacity: 0, transform: "translateY(-2px)" },
            //         to: { opacity: 1, transform: "translateY(0)" },
            //     },
            //     slideLeftAndFade: {
            //         from: { opacity: 0, transform: "translateX(2px)" },
            //         to: { opacity: 1, transform: "translateX(0)" },
            //     },
            //     slideUpAndFade: {
            //         from: { opacity: 0, transform: "translateY(2px)" },
            //         to: { opacity: 1, transform: "translateY(0)" },
            //     },
            //     slideRightAndFade: {
            //         from: { opacity: 0, transform: "translateX(-2px)" },
            //         to: { opacity: 1, transform: "translateX(0)" },
            //     },
            // },
            // animation: {
            //     "accordion-down": "accordion-down 0.2s ease-out",
            //     "accordion-up": "accordion-up 0.2s ease-out",
            //     slideDownAndFade:
            //         "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            //     slideLeftAndFade:
            //         "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            //     slideUpAndFade:
            //         "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            //     slideRightAndFade:
            //         "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
            // },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
