import { H1 } from "@/components/Text/H1";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "2rem 4rem",
                    gap: "16px",
                }}
            >
                <h1
                    style={{
                        fontSize: "3rem",
                        lineHeight: "2.5rem",
                        fontWeight: "bold",
                        color: "#009ee0",
                    }}
                >
                    ОБУЧЕНИЕ СЛУЖЕНИЕМ
                </h1>
                <hr
                    style={{
                        height: "2px",
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                <span style={{ fontSize: "1.5rem", lineHeight: "1.75rem" }}>
                    «ОБУЧЕНИЕ СЛУЖЕНИЕМ» — это уникальная программа, которая
                    объединяет теоретическое обучение и практическую
                    общественную деятельность в единый образовательный процесс.
                    Она способствует не только развитию компетенций учащихся, но
                    и помогает им обнаружить собственную уникальность, находя
                    оптимальный путь для профессионального роста. Через участие
                    в программе «Обучение служением» студенты получают
                    возможность применять свои знания и навыки на практике,
                    работая вместе с некоммерческими организациями и решая
                    актуальные социальные проблемы.
                </span>
                {/* <div className="w-full border-2 rounded-lg border-main py-2 px-4 lg:px-8">
                    <h2 className="text-lg sm:text-xl text-center text-main">
                        Студенты выполняют не волонтёрские, а профессиональные
                        задачи от некоммерческих организаций согласно своим
                        специализациям и компетенциям.
                    </h2>
                </div> */}
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        borderWidth: "2px",
                        borderColor: "#009ee0",
                        padding: "0.5rem 2rem",
                        borderRadius: "1rem"
                    }}
                >
                    <h2
                        style={{
                            textAlign: "center",
                            fontSize: "1.5rem",
                            lineHeight: "1.75rem",
                        }}
                    >
                        Студенты выполняют не волонтёрские, а профессиональные
                        задачи от некоммерческих организаций согласно своим
                        специализациям и компетенциям.
                    </h2>
                </div>
            </div>
        ),
        { ...size }
    );
}
