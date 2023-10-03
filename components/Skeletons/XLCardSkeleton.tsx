import { FC } from "react";
import { Card } from "../Card";

export const XLCardSkeleton: FC<{ withImage?: boolean }> = ({
    withImage = true,
}) => {
    return (
        <Card>
            {withImage ? (
                <Card.Image>
                    <div className="relative w-full pb-[80%] rounded-t">
                        <div className="animate-pulse flex justify-center items-center absolute w-full h-full object-cover rounded-t bg-secondary-light dark:bg-secondary-dark"></div>
                    </div>
                </Card.Image>
            ) : (
                <></>
            )}
            <Card.Content className="flex flex-col items-center h-[10rem] justify-between w-full">
                <div className="w-full h-[7rem] flex justify-center p-[0.5rem]">
                    <div className="w-full h-[6rem] rounded animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                </div>
                <div className="w-full h-[3rem] flex justify-center px-[0.5rem] pt-[0.25]">
                    <div className="w-full h-[2.25rem] rounded animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                </div>
            </Card.Content>
        </Card>
    );
};
