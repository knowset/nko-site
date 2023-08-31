import { H2 } from "@/components/Text/H2";
import { infographics } from "@/constants";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col gap-12">
            {infographics.map((item) => (
                <div
                    key={"infographics-item-" + item.title}
                    className="flex flex-col justify-center items-center gap-8"
                >
                    <h1 className="text-4xl">{item.title}</h1>
                    <Image
                        src={item.picture}
                        width={4242}
                        height={4000}
                        alt={item.title}
                    />
                </div>
            ))}
        </div>
    );
}
