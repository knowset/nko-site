import { FC } from "react";

export const DocPageSkeleton: FC<{}> = () => {
    return (
        <div className="flex flex-col gap-12">
            <div>
                <h1 className="text-4xl font-extrabold text-transparent bg-zinc-200 rounded-md">D</h1>
                <hr className="my-4" />
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl text-transparent bg-zinc-200 rounded-md">
                    ПОЛНОЕ НАИМЕНОВАНИЕ ЦЕНТРА
                </h2>
                <h2 className="text-lg sm:text-xl text-transparent bg-zinc-200 rounded-md">
                    Автономная некоммерческая организация «Ресурсный центр
                    поддержки социально ориентированных некоммерческих
                    организаций «Инициатива» Вологодского государственного
                    университета»
                </h2>
                <h2 className="text-lg sm:text-xl text-transparent bg-zinc-200 rounded-md">
                    ОГРН 1203500000219 ИНН 3525452411
                </h2>
                <h2 className="text-lg sm:text-xl text-transparent bg-zinc-200 rounded-md">
                    Автономная некоммерческая организация «Ресурсный центр
                    поддержки социально ориентированных некоммерческих
                    организаций «Инициатива» Вологодского государственного
                    университета»
                </h2>
                <h2 className="text-lg sm:text-xl text-transparent bg-zinc-200 rounded-md">
                    ОГРН 1203500000219 ИНН 3525452411
                </h2>
            </div>
        </div>
    );
};
