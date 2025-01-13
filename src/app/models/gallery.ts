import { Picture } from "./images";

export interface Gallery {
    _id: string;
    title: string;
    pictures: Picture[];
}