import { Task } from "./Task";

export class User {
    userId?: number;
    firstName?: string;
    lastName?: string;
    image?: string;
    emailId?: string;
    password?: string;
    role?: string;
    tasks?:Array<Task>;

}