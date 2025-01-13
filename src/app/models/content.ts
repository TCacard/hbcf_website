import { Citation } from "./citation";
import { Picture } from "./images";

export interface Content {
    title: string;
    content?: ContentItem[];
    pictures?: Picture[];
    citations?: Citation[];
}

export interface ContentItem {
    _id: string;
    text: string;
    list_element?: ContentItem[];
    document?: string;
    link?: string;
}
