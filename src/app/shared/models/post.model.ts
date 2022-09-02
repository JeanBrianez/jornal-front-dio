import { Author } from "./author.model";
import { Image } from "./image.model";
import { Page } from "./page.model";

export interface Post {
    id?: number,
    name: string,
    postAuthor: Author,
    content: string,
    postImages: [Image],
    postPages: [Page],
    created: Date,
    modified: Date
}