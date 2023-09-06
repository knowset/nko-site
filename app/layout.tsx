import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/Footer";
import Favicon from "@/public/favicon.ico";

export const metadata = {
    metadataBase: new URL("https://inciativa.netlify.app"),
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-white min-h-[100vh] w-full flex flex-col no-scrollbar">
                <Providers>
                    <Header />
                    <Layout>
                        <div className="pt-12 pb-20 flex-grow h-full flex flex-col justify-center items-center">
                            {children}
                        </div>
                    </Layout>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
