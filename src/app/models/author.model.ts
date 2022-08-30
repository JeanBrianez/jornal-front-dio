import { Page } from "./page.model"
import { Post } from "./post.model"

export type Author = {
    id: number,
    name: string,
    role: string,
    email: string,
    authorPages: [Page],
    authorPosts: [Post],
    created: Date,
    modified: Date
}