import faunadb, { RequestResult } from "faunadb";

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
    console.log("GETUSERBYEMAILFUNC");
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
