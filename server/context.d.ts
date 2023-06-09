import { User } from "~/types/IUser";

declare module "h3" {
    interface H3EventContext {
        user?: User;
    }
}

export {};
