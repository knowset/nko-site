import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { SessionComp } from "@/components/TestSessionComp";
import { AdminCreateButton } from "@/components/AdminCreateButton";

export const metadata = {
    title: "Ресурсный центр НКО ВоГУ 'Инициатива'",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-white">
                <Providers>
                <SessionComp />
                <Header />
                <div className="pt-12">
                
                <Layout>{children}</Layout>
                </div>
                </Providers>
            </body>
        </html>
    );
}
