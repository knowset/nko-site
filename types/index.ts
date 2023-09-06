export type ErrorField = {
    field?: string;
    message: string;
};

// note remove this
export type PostError = {
    errors?: ErrorField[];
};

export type Project = {
    id: string;
    title: string;
    sub_title: string;
    start_of_the_implementation_period: string;
    end_of_the_implementation_period: string;
    source_of_financing: string;
    amount_of_the_subsidy: string;
    main_results: string;
    images_ids: string[];
    date: string;
};

export type FaunadbPost<T> = {
    ref: any;
    ts: any;
    data: T;
};

export type FaunadbPosts<T> = {
    data: FaunadbPost<T>[];
};

export type FaunadbPostsOrError<T> = {
    posts?: FaunadbPost<T>[];
    errors?: ErrorField[];
    status: number;
};

export type FaunadbPostOrError<T> = {
    post?: FaunadbPost<T>;
    errors?: ErrorField[];
    status: number;
};

export enum ImageState {
    DEFAULT,
    LOADING,
    UPLOADED,
}

export type IMG = {
    state: ImageState;
    image: File;
};
