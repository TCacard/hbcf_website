import { Citation } from "./citation";
import { Image } from "./images";

export interface Content {
    title: string;
    content: string[];
    images: Image[];
    citation: Citation;
}