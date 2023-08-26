export default function Loading() {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="animate-pulse w-full h-36 md:h-24 xl:h-12 rounded-lg bg-zinc-200"></div>
                <div className="animate-pulse w-full h-16 md:h-8 rounded-lg bg-zinc-200"></div>
                <div className="animate-pulse w-full max-w-[700px] bg-zinc-200 aspect-video rounded-lg"></div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="animate-pulse w-full h-12 rounded-lg bg-zinc-200"></div>
                <div className="animate-pulse w-full h-36 lg:h-24 xl:h-16 rounded-lg bg-zinc-200"></div>
            </div>
        </div>
    );
}
