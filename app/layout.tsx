import { Header } from "@/components/Header/Header";
import { GlobalLayout } from "@/components/Layouts/GlobalLayout";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/Footer";
import Favicon from "@/public/favicon.ico";
import { Inter } from "next/font/google";

export const metadata = {
    metadataBase: new URL("https://initsiativa.vercel.app"),
    title: {
        default: 'Ресурсный центр НКО ВоГУ "Инициатива"',
        template: '%s | Ресурсный центр НКО ВоГУ "Инициатива"',
    },
    description: "",
    icons: [{ rel: "icon", url: Favicon.src }],
    openGraph: {
        title: {
            default: 'Ресурсный центр НКО ВоГУ "Инициатива"',
            template: '%s | Ресурсный центр НКО ВоГУ "Инициатива"',
        },
    },
    twitter: {
        title: {
            default: 'Ресурсный центр НКО ВоГУ "Инициатива"',
            template: '%s | Ресурсный центр НКО ВоГУ "Инициатива"',
        },
    },
};

const inter = Inter({
    subsets: ["cyrillic", "latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={inter.className}>
            <body className="bg-white dark:bg-primary-dark transition-colors duration-300 min-h-[100vh] w-full flex flex-col no-scrollbar">
                <Providers
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <GlobalLayout isContent>
                        <div className="pt-12 pb-20 flex-grow h-full flex flex-col justify-center items-center">
                            {children}
                        </div>
                    </GlobalLayout>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
