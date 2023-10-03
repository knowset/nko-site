import { FC } from "react";
import { Card } from "../Card";

export const SMCardSkeleton: FC<{ withImage: boolean }> = ({
    withImage = true,
}) => {
    return (
        <Card height="sm" className="md:flex-row p-8 gap-4 items-start">
            {withImage ? (
                <Card.Image>
                    <div className="w-full md:w-auto md:h-full flex flex-col justify-start items-start md:m-0">
                        <div className="w-full md:w-48 h-48 animate-pulse bg-secondary-light dark:bg-secondary-dark rounded"></div>
                    </div>
                </Card.Image>
            ) : (
                <></>
            )}
            <Card.Content className="flex flex-col items-center h-full justify-between w-full">
                <div className="w-full h-full flex flex-col gap-4">
                    <div className="w-full flex justify-center">
                        <div className="w-full h-[2rem] rounded animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                    </div>
                    <div className="w-full h-full flex justify-center">
                        <div className="w-full h-[10rem] rounded animate-pulse bg-secondary-light dark:bg-secondary-dark"></div>
                    </div>
                </div>
            </Card.Content>
        </Card>
    );
};
