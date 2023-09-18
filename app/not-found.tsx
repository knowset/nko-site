import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-main text-center">
                Страница не найдена
            </h1>
            <Link href="/" className="text-xl underline">Вернуться на главную?</Link>
        </div>
    );
}
