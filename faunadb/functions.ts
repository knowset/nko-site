import faunadb, { RequestResult } from "faunadb";
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

interface Post {
    id: string;
    title: string;
    text: string;
}

interface ErrorField {
    field: string;
    message: string;
}

interface UserResponse {
    errors?: ErrorField[];
    // поменять на data: User | Post
    user?: User;
    status: number;
}

interface UserResponse {
    errors?: ErrorField[];
    post?: Post;
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

interface FaunadbPostResponse {
    data: {
        ref: any;
        ts: any;
        data: {
            id: string;
            title: string;
            text: string;
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
            console.log(userData.ref.id);
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

export const getAllPosts = async (postType: string) => {
    return new Promise<any>(async (resolve, reject) => {
        try {
            const req = (await client
                .query(
                    q.Reverse(
                        q.Map(
                            q.Paginate(q.Documents(q.Collection(postType))),
                            q.Lambda("X", q.Get(q.Var("X")))
                        )
                    )
                )
                .then((ret) => {
                    resolve(ret);
                })
                .catch((err) =>
                    console.error(
                        "Error: [%s] %s: %s",
                        err.name,
                        err.message,
                        err.errors()[0].description
                    )
                )) as any;

            return { status: 200, body: JSON.stringify(await req) };
        } catch (err) {
            return JSON.parse((err as Error).message);
        }
    });
};

export const getPostByID = async (postType: string, postId: string) => {
    try {
        const resData: FaunadbPostResponse = await client.query(
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
            const postData = resData.data[0];
            return {
                post: {
                    ...postData.data,
                },
                status: 200,
            };
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

export const createPost = async (
    postType: string,
    data: { title: string; text: string }
) => {
    try {
        const req = await client
            .query(
                q.Create(q.Collection(postType), {
                    data: {
                        id: uuid(),
                        title: data.title,
                        text: data.text,
                        // images: JSON.stringify(post.data.images),
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

        return { statusCode: 200, body: JSON.stringify({ newMem: req }) };
    } catch (err) {
        return JSON.parse((err as Error).message);
    }
};
