export default async function Home() {
    return (
        <main>
            <div className="flex flex-col gap-12">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-500 text-center">
                        Преобразуем инициативы в проекты
                    </h1>
                    <h2 className="text-xl">
                        Мы готовы поддержать твою самую смелую идею Действуй уже
                        сегодня!
                    </h2>
                    <img className="mt-4 rounded-lg " src="mainpagepic.png" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-500 text-center">
                        НАША МИССИЯ
                    </h1>
                    <h2 className="text-xl">
                        Мы поддерживаем студентов ВоГУ в реализации социальных
                        инициатив, развиваем уверенность в своих силах, создаем
                        возможности для личностного и профессионального роста
                    </h2>
                </div>
            </div>
        </main>
    );
}
