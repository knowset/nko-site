import {
    FaunadbPost,
    FaunadbPostOrError,
    FaunadbPosts,
    FaunadbPostsOrError,
    Project,
} from "@/types";
import faunadb from "faunadb";
import { v4 as uuid } from "uuid";

const q = faunadb.query;
const client = new faunadb.Client({
    secret: "fnAFLkDLPdAAUTb14qMa2TZuIwnxPe9UGGaA97md",
});

interface User {
    id: number;
    email: string;
    role: string;
    password: string;
}

interface ErrorField {
    field: string;
    message: string;
}

interface UserResponse {
    errors?: ErrorField[];
    user?: User;
    status: number;
}

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
                        q.ContainsStr(
                            q.Select(["data", "email"], q.Get(ref)),
                            email
                        )
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
                    q.Paginate(q.Match(q.Index("all_items"))),
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

export const getAllPosts: (
    postType: string
) => Promise<FaunadbPostsOrError<Project>> = async (postType: string) => {
    try {
        const res: FaunadbPosts<Project> = await client.query(
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

export const getPostByID: (
    postType: string,
    postId: string
) => Promise<FaunadbPostOrError<Project>> = async (postType, postId) => {
    try {
        const resData: FaunadbPosts<Project> = await client.query(
            q.Map(
                q.Filter(
                    q.Paginate(q.Match(q.Index(postType + "_by_id"))),
                    q.Lambda((ref) =>
                        q.ContainsStr(
                            q.Select(["data", "id"], q.Get(ref)),
                            postId
                        )
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

export const createPost = async (postType: string, data: Project) => {
    try {
        const res = await client
            .query(
                q.Create(q.Collection(postType), {
                    data: {
                        ...data,
                        id: uuid(),
                        date: new Date().toString(),
                    },
                })
            )
            .then((ret) => console.log(ret))
            .catch((err) =>
                console.error(
                    "Error: [%s] %s: %s",
                    err.name,
                    err.message,
                    err.errors()[0].description
                )
            );
        console.log("REQ FROM create:", res);
        return { statusCode: 200, body: JSON.stringify({ res }) };
    } catch (err) {
        return JSON.parse((err as Error).message);
    }
};

export const updatePostById = async (
    postType: string,
    data: FaunadbPost<Project>
) => {
    return;
    // try {
    //     const id = data.ref["@ref"].id;

    //     const res: FaunadbPosts<Project> = await client.query(
    //         q.Update(q.Ref(q.Collection(postType), id), {
    //             data: data.data,
    //         })
    //     );

    //     if (!res || !res?.data) {
    //         throw new Error("Something went wrong");
    //     }

    //     return {
    //         statusCode: 200,
    //         body: JSON.stringify({ message: "Post successfully updated" }),
    //     };
    // } catch (err) {
    //     return JSON.parse((err as Error).message);
    // }
};

export const deletePostById = async (
    postType: string,
    post: FaunadbPost<Project>
) => {
    try {
        const faunaDBPostId = post.ref["@ref"].id;
        const res = await client.query(
            q.Delete(q.Ref(q.Collection(postType), faunaDBPostId))
        );

        if (!res) {
            throw new Error("Something went wrong");
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Post successfully deleted" }),
        };
    } catch (err) {
        return JSON.parse((err as Error).message);
    }
};
