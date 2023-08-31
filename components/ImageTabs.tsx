import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ImageTabsProps {
    images: { id: number; value: string }[];
}

export const ImageTabs: FC<ImageTabsProps> = ({ images }) => {
    if (images.length == 0) {
        return null;
    }
    return (
        <Tabs defaultValue={"image-tab-" + images[0].id.toString()}>
            {images.map((image) => (
                <TabsContent
                    key={"image-tab-" + image.id.toString()}
                    value={"image-tab-" + image.id.toString()}
                >
                    <div className="flex justify-center lg:px-4 relative pb-[100%] lg:pb-[75%] my-4">
                        <img
                            src={image.value}
                            className="absolute h-full w-full lg:w-[75%] object-cover rounded-lg my-2"
                        />
                    </div>
                </TabsContent>
            ))}
            <TabsList className="mt-4 gap-4">
                {images.map((image) => (
                    <TabsTrigger
                        key={"image-tab-" + image.id.toString()}
                        value={"image-tab-" + image.id.toString()}
                    >
                        <div className="flex justify-center px-12 relative pb-[100%]">
                            <img
                                src={image.value}
                                className="absolute h-full w-full object-cover rounded-lg"
                            />
                        </div>
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
};
