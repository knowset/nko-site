import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SessionComp } from "@/components/TestSessionComp";
import { AdminCreateButton } from "@/components/AdminCreateButton";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: {
        default: "Ресурсный центр НКО ВоГУ 'Инициатива'",
        template: "%s | Ресурсный центр НКО ВоГУ 'Инициатива'"},
    description: "",
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
                    <SessionComp />
                        <Header />
                        <div className="pt-12 pb-20 flex-grow h-full">
                            <Layout>{children}</Layout>
                        </div>
                        <Footer />
                </Providers>
            </body>
        </html>
    );
}
