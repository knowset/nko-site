export const shortenTitle: (title: string) => string = (title) => {
    const splitedTitle: string[] = title.slice(0, 60).split(" ");

    if (splitedTitle[splitedTitle.length - 1].length === 0) {
        splitedTitle.pop();
    }

    if (
        splitedTitle[splitedTitle.length - 1] !==
        title.split(" ")[splitedTitle.length - 1]
    ) {
        splitedTitle.pop();
    }

    const shortTitle: string = splitedTitle.join(" ");

    if (shortTitle !== title) {
        return shortTitle + "...";
    }

    return shortTitle;
};
