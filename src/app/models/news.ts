import { ContentItem } from "./content";
import { Picture } from "./images";

export interface News {
    _id: string;
    title: string;
    newItems: NewItem[];
}

export interface NewItem {
    _id: string;
    title: string;
    summary: string;
    content: ContentItem[];
    author: string;
    publishDate: string;
    likes: number;
    importance: number;
    pictures: Picture[];
}
