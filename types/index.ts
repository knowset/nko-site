export type ErrorField = {
    field?: string;
    message: string;
};

// note remove this
export type PostError = {
    errors?: ErrorField[];
};

export type GeneralPostProps = {
    id: string;
    date: string;
};

export type Project = {
    title: string;
    sub_title: string;
    start_of_the_implementation_period: string;
    end_of_the_implementation_period: string;
    source_of_financing: string;
    amount_of_the_subsidy: string;
    main_results: string;
    images_ids: string[];
};

export type Partner = {
    title: string;
    abbreviation: string;
    director_of_the_organization: string;
    main_activity: string;
    site: string;
    social_media: string;
    email: string;
    NKO_projects: string;
    images_ids: string[];
};

export type Training = {
    title: string;
    description: string;
    duration: string;
    link_to_google_form: string;
    images_ids: string[];
};

export type Case = {
    title: string;
    description: string;
    customer: string;
    google_file_id: string;
};

export type SuccessStory = {
    title: string;
    grant_recipient: string;
    scope_of_support: string;
    grantor: string;
    description: string;
    images_ids: string[];
};

export type EventForStudents = {
    title: string;
    description: string;
    site: string;
    end_of_the_implementation_period: string;
};

export type FaunadbPost<T> = {
    ref: any;
    ts: any;
    data: {
        id: string;
        date: string;
    } & T;
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
    PREUPLOADED,
    UPLOADED,
    DELETED,
}

export type IMG = {
    state: ImageState;
    image: File | string;
};

export type User = {
    id: number;
    email: string;
    role: string;
    password: string;
};

export type UserResponse = {
    errors?: ErrorField[];
    user?: User;
    status: number;
};
