import { DefaultSession } from "next-auth";

export enum UserRole {
    guest = "guest",
    admin = "admin",
}

declare module "next-auth" {
    interface User {
        role?: UserRole;
    }

    interface Session extends DefaultSession {
        user?: User;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role?: UserRole;
    }
}
