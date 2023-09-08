import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface ImageTabsProps {
    images_urls: string[];
}

export const ImageTabs: FC<ImageTabsProps> = ({ images_urls }) => {
    if (images_urls.length == 0) {
        return null;
    }
    return (
        <Tabs defaultValue={"image-tab-" + images_urls[0]}>
            {images_urls.map((image_url) => (
                <TabsContent
                    key={"image-tab-" + image_url}
                    value={"image-tab-" + image_url}
                >
                    <div className="flex justify-center xl:px-4 relative pb-[100%] xl:pb-[60%] my-4">
                        <Image
                            className="absolute h-full w-full xl:w-[75%] object-cover rounded-lg my-2 shadow-lg"
                            src={image_url}
                            alt=""
                            placeholder="blur"
                            blurDataURL={image_url}
                            width={2000}
                            height={2000}
                            quality={100}
                        />
                    </div>
                </TabsContent>
            ))}
            <TabsList className="h-full xl:w-[75%] mt-8 gap-4 xl:mx-[12.5%] overflow-x-scroll flex justify-start image-selector pb-6">
                {images_urls.map((image_url) => (
                    <TabsTrigger
                        key={"image-tab-" + image_url}
                        value={"image-tab-" + image_url}
                        className="rounded-md shadow-md z-[1000]"
                    >
                        <div className="flex justify-center px-12 relative pb-[100%] rounded-md">
                            <Image
                                className="absolute w-full h-full border-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-gray-200 hover:border-gray-300 transition-all duration-100 rounded-md object-scale-down"
                                src={image_url}
                                alt=""
                                placeholder="blur"
                                blurDataURL={image_url}
                                width={1000}
                                height={1000}
                                quality={100}
                            />
                        </div>
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
};
