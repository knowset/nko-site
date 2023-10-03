import {
    FaunadbPost,
    FaunadbPostOrError,
    FaunadbPosts,
    FaunadbPostsOrError,
    UserResponse,
} from "@/types";
import faunadb from "faunadb";
import { v4 as uuid } from "uuid";

const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_API_KEY as string,
});

interface FaunadbUserResponse {
    data: {
        ref: any;
        ts: any;
        data: {
            email: string;
            password: string;
            role: string;
        };
    }[];
}

export const getUserByEmail = async (email: string): Promise<UserResponse> => {
    try {
        const resData: FaunadbUserResponse = await client.query(
            q.Map(
                q.Filter(
                    q.Paginate(q.Match(q.Index("all_items"))),
                    q.Lambda((ref) =>
                        q.Equals(q.Select(["data", "email"], q.Get(ref)), email)
                    )
                ),
                q.Lambda((ref) => q.Get(ref))
            )
        );
        if (resData?.data.length == 0) {
            throw new Error(
                JSON.stringify({
                    status: 409,
                    error: {
                        field: "",
                        message: "пользователь не существует",
                    },
                })
            );
        } else {
            const userData = resData.data[0];
            return {
                user: {
                    ...userData.data,
                    id: userData.ref.id,
                },
                status: 200,
            } as UserResponse;
        }
    } catch (err: any) {
        const errorData: {
            status: number;
            error: { field: string; message: string };
        } = JSON.parse((err as Error).message);

        return {
            errors: [errorData.error],
            status: errorData.status,
        };
    }
};

export const createUser = async (userData: {
    data: {
        email: string;
        password: string;
    };
}) => {
    try {
        const resData: { data: any[] } = await client.query(
            q.Map(
                q.Filter(
                    q.Paginate(q.Match(q.Index("user_by_id"))),
                    q.Lambda((ref) =>
                        q.ContainsStr(
                            q.Select(["data", "email"], q.Get(ref)),
                            userData.data.email
                        )
                    )
                ),
                q.Lambda((ref) => q.Get(ref))
            )
        );

        if (resData?.data.length == 0) {
            const res = await client.query(
                q.Create(q.Collection("user"), {
                    data: {
                        email: userData.data.email,
                        password: userData.data.password,
                        role: "guest",
                    },
                })
            );
            return { user: { email: userData.data.email }, status: 200 };
        } else
            throw new Error(
                JSON.stringify({
                    status: 409,
                    error: {
                        field: "email",
                        message: "that email doesn't exist",
                    },
                })
            );
    } catch (err: any) {
        const errorData = JSON.parse((err as Error).message);

        return {
            error: errorData.error,
            status: errorData.status,
        };
    }
};

export const getAllPosts = async <T>(
    postType: string
): Promise<FaunadbPostsOrError<T>> => {

    try {
        const res: FaunadbPosts<T> = await client.query(
            q.Reverse(
                q.Map(
                    q.Paginate(q.Documents(q.Collection(postType))),
                    q.Lambda("X", q.Get(q.Var("X")))
                )
            )
        );

        if (!res) {
            throw new Error(
                JSON.stringify({
                    status: 500,
                    errors: [
                        {
                            field: "",
                            message: "Невозможно получить посты",
                        },
                    ],
                })
            );
        }

        return { posts: res.data, status: 200 };
    } catch (err) {
        const errorData: {
            status: number;
            errors: { field: string; message: string }[];
        } = JSON.parse((err as Error).message);

        return { ...errorData };
    }
};

export const getPostByID = async <T>(
    postType: string,
    postId: string
): Promise<FaunadbPostOrError<T>> => {
    try {
        const resData: FaunadbPosts<T> = await client.query(
            q.Map(
                q.Filter(
                    q.Paginate(q.Match(q.Index(postType + "_by_id"))),
                    q.Lambda((ref) =>
                        q.Equals(q.Select(["data", "id"], q.Get(ref)), postId)
                    )
                ),
                q.Lambda((ref) => q.Get(ref))
            )
        );

        if (resData?.data.length == 0) {
            throw new Error(
                JSON.stringify({
                    status: 404,
                    error: {
                        field: "",
                        message: "Станица не найдена",
                    },
                })
            );
        } else {
            const post = resData.data[0];
            return {
                post: post,
                status: 200,
            };
        }
    } catch (err: any) {
        const errorData: {
            status: number;
            error: { field: string; message: string };
        } = JSON.parse((err as Error).message);

        return {
            ...errorData,
        };
    }
};

export const createPost = async <T>(postType: string, data: T) => {
    try {
        const resData: FaunadbPosts<T> = await client.query(
            q.Create(q.Collection(postType), {
                data: {
                    ...data,
                    id: uuid(),
                    date: new Date().toString(),
                },
            })
        );
        const post = resData.data[0];
        return {
            post: post,
            status: 200,
        };
    } catch (err) {
        const errorData: {
            status: number;
            error: { field: string; message: string };
        } = JSON.parse((err as Error).message);

        return {
            ...errorData,
        };
    }
};

export const updatePostById = async <T>(
    postType: string,
    data: FaunadbPost<T>
) => {
    try {
        const id = data.ref["@ref"].id;

        const resData: FaunadbPosts<T> = await client.query(
            q.Update(q.Ref(q.Collection(postType), id), {
                data: data.data,
            })
        );

        if (!resData) {
            throw new Error(
                JSON.stringify({
                    status: 500,
                    error: {
                        field: "",
                        message: "Что-то пошло не так",
                    },
                })
            );
        }

        const post = resData.data[0];
        return {
            post: post,
            status: 200,
        };
    } catch (err) {
        const errorData: {
            status: number;
            error: { field: string; message: string };
        } = JSON.parse((err as Error).message);

        return {
            ...errorData,
        };
    }
};

export const deletePostById = async <T>(
    postType: string,
    post: FaunadbPost<T>
) => {
    try {
        const faunaDBPostId = post.ref["@ref"].id;
        const resData: FaunadbPost<T> = await client.query(
            q.Delete(q.Ref(q.Collection(postType), faunaDBPostId))
        );

        if (!resData) {
            throw new Error(
                JSON.stringify({
                    status: 500,
                    error: {
                        field: "",
                        message: "Что-то пошло не так",
                    },
                })
            );
        }

        return {
            post: resData.data,
            status: 200,
        };
    } catch (err) {
        const errorData: {
            status: number;
            error: { field: string; message: string };
        } = JSON.parse((err as Error).message);

        return {
            ...errorData,
        };
    }
};
