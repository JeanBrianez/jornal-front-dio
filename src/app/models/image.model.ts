import { Post } from "./post.model";

export type Image = {
    id: number,
    name: string,
    images: Post,
    description: string,
    created: Date,
    modified: Date  
}