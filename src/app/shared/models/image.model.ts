import { Post } from "./post.model";

export interface Image {
    id?: number,
    name: string,
    images: Post,
    description: string,
    created: Date,
    modified: Date  
}