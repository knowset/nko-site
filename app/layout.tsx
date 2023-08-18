import { Header } from "@/components/Header";
import { Layout } from "@/components/Layout";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { SessionComp } from "@/components/TestSessionComp";

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
                <AuthProvider>
                <SessionComp />
                <Header />
                <div className="pt-24">

                <Layout>{children}</Layout>
                </div>
                </AuthProvider>
            </body>
        </html>
    );
}
