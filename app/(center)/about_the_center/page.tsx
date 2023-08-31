import { StaticPageSkeleton } from "@/components/Skeletons/StaticPageSkeleton";
import { H1 } from "@/components/Text/H1";
import { H2 } from "@/components/Text/H2";
import { directions_of_work_of_the_center, team } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "О центре",
};

export default async function Page() {
    return (
        <div className="flex flex-col gap-10 mb-auto">
            <div>
                <H1 textsize="text-4xl">О центре</H1>
                <hr className="mt-4" />
            </div>
            <div className="flex flex-col gap-4">
                <H2>
                    Автономная некоммерческая организация «Ресурсный центр
                    поддержки социально ориентированных некоммерческих
                    организаций «Инициатива» Вологодского государственного
                    университета» зарегистрирована 10 января 2020 года.
                </H2>
                <H2>
                    Основная{" "}
                    <span className="text-main font-extrabold">
                        ЦЕЛЬ ДЕЯТЕЛЬНОСТИ{" "}
                    </span>
                    - продвижение социальных инициатив молодежи региона,
                    стимулирование социального проектирования и социальной
                    предпринимательской активности молодежи.
                </H2>
            </div>
            <div className="flex flex-col gap-4">
                <H1>НАПРАВЛЕНИЯ РАБОТЫ ЦЕНТРА</H1>
                <div className="mt-4 grid sm:grid-cols-2 gap-8 lg:px-24">
                    {directions_of_work_of_the_center.map((item) => (
                        <div className="mt-4 sm:mt-2 lg:mt-0 flex flex-col items-center gap-4 p-8 overflow-hidden rounded-lg shadow-md ring-1 ring-black ring-opacity-5 bg-white">
                            <Image
                                width={128}
                                height={128}
                                alt=""
                                src={item.picture}
                                placeholder="blur"
                                blurDataURL={item.picture}
                                loading="lazy"
                                quality={100}
                                className="m-4"
                            />
                            <p className="text-center text-lg">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <H1>КОМАНДА</H1>
                <div className="mt-2 grid sm:grid-cols-2 gap-8 lg:px-24">
                    {team.map((item) => (
                        <div className="mt-4 sm:mt-2 lg:mt-0 flex flex-col items-center gap-2 p-8 overflow-hidden rounded-lg shadow-md ring-1 ring-black ring-opacity-5 bg-white">
                            <Image
                                width={256}
                                height={256}
                                alt=""
                                src={item.picture}
                                placeholder="blur"
                                blurDataURL={item.picture}
                                loading="lazy"
                                quality={100}
                                className="m-4"
                            />
                            <div className="text-center">
                                <h2 className="text-xl font-bold">
                                    {item.name}
                                </h2>
                                <p>{item.job_title}</p>
                                <p className="p-2 lg:p-4 mt-4 text-lg">
                                    {item.achievements}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <H1>ОРГАНЫ УПРАВЛЕНИЯ ЦЕНТРА</H1>
                <div className="flex flex-col gap-4">
                    <H2>
                        Высший руководящий орган центр -{" "}
                        <span className="font-bold">
                            Общее собрание учредителей.
                        </span>{" "}
                        Обеспечивает соблюдение центром целей, в интересах
                        которых он был создан. Состав учредителей центра: Ожогин
                        Михаил Владимирвоич, Якуничева Ольга Николаевна.
                    </H2>
                    <H2>
                        Единоличный исполнительный орган центра -{" "}
                        <span className="font-bold">директор</span>.
                        Осуществляет текущее руководство деятельностью центра,
                        избирается Общим собранием учредителей на 3 года и
                        подотчетен ему. Директор центра - Якуничева Ольга
                        Николаевна.
                    </H2>
                </div>
            </div>
        </div>
    );
}
