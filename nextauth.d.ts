import { DefaultSession, DefaultUser } from "next-auth";

export enum Role {
    guest = "guest",
    admin = "admin",
}
interface IUser extends DefaultUser {
    role?: string;
}
declare module "next-auth" {
    interface Session {
        user: {
            role: string
        } & DefaultSession['user']
    }
    interface User extends IUser {}
}
declare module "next-auth/jwt" {
    interface JWT extends IUser {}
}

