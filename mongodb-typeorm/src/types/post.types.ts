import Comment from "../entities/embed/Comment.entity";

export type TPostCreation = {
    content: string;
    comments?: Comment[];
}