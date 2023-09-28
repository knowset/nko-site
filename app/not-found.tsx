import { H1 } from "@/components/Text/H1";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-[calc(100vh_-_300px)] w-full justify-center items-center gap-4 xl:gap-8">
            <H1 size={"big"} className="font-extrabold text-main text-center">
                Страница не найдена
            </H1>
            <Link href="/" className="text-xl underline">
                Вернуться на главную?
            </Link>
        </div>
    );
}
