import { FC } from "react";



export const PostSkeleton: FC<{}> = () => {
    return (
        <div className="bg-gradient-to-br from-white to-bg-zinc-200" style={{
            animation: ""
        }}>
            <div className="w-full p-2 mb-2">
                <div className="w-full rounded shadow-md h-full">
                    <div>
                        <div className="relative pb-[75%]">
                            <div className="flex justify-center items-center absolute w-full h-full object-cover rounded-t bg-zinc-300"></div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-[10rem] p-4">
                        <div>
                            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight rounded bg-zinc-300 text-transparent">
                                Название
                            </h2>
                            <p className="prose mb-3 max-w-none rounded bg-zinc-300 text-transparent">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <div>
                            <p className="roundex bg-zinc-300 text-transparent rounded">Читать дальше →</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
