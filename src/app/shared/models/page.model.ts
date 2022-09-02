import { Post } from "./post.model";

export interface Page {
    id?: number,
    name: string,
    category: string,
    pagePosts: [Post],
    created: Date,
    modified: Date   
}