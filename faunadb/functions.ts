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

interface Project {
    title: string;
    sub_title: string;
    start_of_the_implementation_period: string;
    end_of_the_implementation_period: string;
    source_of_financing: string;
    amount_of_the_subsidy: string;
    main_results: string;
    images: { id: number; value: string }[];
}

interface FaunadbPosts {
    data: FaunadbPost[];
}

interface FaunadbPost {
    ref: any;
    ts: any;
    data?: {
        id: string;
        date: string;
    } & Project;
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

export const getAllPosts = async (postType: string) => {
    try {
        const res: FaunadbPosts = await client.query(
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
                    error: {
                        field: "",
                        message: "Невозможно получить посты",
                    },
                })
            );
        }
        const posts = res.data;
        return { posts: posts };
    } catch (err) {
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

export const getPostByID = async (postType: string, postId: string) => {
    try {
        const resData: FaunadbPosts = await client.query(
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
                post: postData,
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

export const createPost = async (postType: string, data: Project) => {
    console.log(data);
    try {
        const req = await client
            .query(
                q.Create(q.Collection(postType), {
                    data: {
                        id: uuid(),
                        ...data,
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

        return { statusCode: 200, body: JSON.stringify({ newMem: req }) };
    } catch (err) {
        return JSON.parse((err as Error).message);
    }
};

export const updatePostById = async (postType: string, data: FaunadbPost) => {
    try {
        const id = data.ref["@ref"].id;

        const res: FaunadbPosts = await client.query(
            q.Update(q.Ref(q.Collection(postType), id), {
                data: data.data,
            })
        );

        if (!res || !res?.data) {
            throw new Error("Something went wrong");
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Post successfully updated" }),
        };
    } catch (err) {
        return JSON.parse((err as Error).message);
    }
};

export const deletePostById = async (postType: string, postId: string) => {
    try {
        const resData: FaunadbPosts = await client.query(
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
        const FaunadbPostsId = resData.data[0].ref.id;
        const res = await client.query(
            q.Delete(q.Ref(q.Collection(postType), FaunadbPostsId))
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
